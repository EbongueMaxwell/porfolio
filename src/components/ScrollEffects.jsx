import { useEffect } from 'react';

export default function ScrollEffects() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    document.documentElement.classList.add('has-scroll-effects');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    const observeElements = root => {
      const elements = [];
      if (root instanceof Element && root.matches('[data-reveal]')) elements.push(root);
      if (root.querySelectorAll) elements.push(...root.querySelectorAll('[data-reveal]'));
      elements.forEach(element => {
        const siblings = [...(element.parentElement?.children ?? [])].filter(child => child.hasAttribute('data-reveal'));
        element.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(element), 4) * 75}ms`);
        observer.observe(element);
      });
    };

    observeElements(document);
    const mutations = new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(node => {
      if (node instanceof Element) observeElements(node);
    })));
    mutations.observe(document.querySelector('main') ?? document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
      document.documentElement.classList.remove('has-scroll-effects');
    };
  }, []);
  return null;
}
