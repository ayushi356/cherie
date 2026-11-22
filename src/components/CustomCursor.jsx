import React, { useEffect, useRef } from 'react';

/**
 * Custom Minimal Dusty-Pink Circular Cursor (#D98FA4)
 * - Solid dusty-pink circle, #D98FA4, approximately 10–12px (11px diameter).
 * - Very subtle pink glow.
 * - Hides the native cursor on desktop only when active.
 * - Restores native text cursor over inputs, textareas, and selectable text.
 * - Guarantees only one visible pointer at all times.
 * - Disabled on touch devices and respects prefers-reduced-motion.
 */
export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect touch / coarse pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Exit immediately on touch or reduced motion
    if (isTouch || isReducedMotion) {
      return;
    }

    const cursorEl = cursorRef.current;
    const dotEl = dotRef.current;
    if (!cursorEl || !dotEl) return;

    // Activate custom cursor styling on desktop body (hides default native pointer)
    document.body.classList.add('has-custom-cursor');

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let isVisible = false;
    let isHovering = false;
    let isClicking = false;
    let isOverText = false;
    let isSelecting = false;
    let rafId = null;

    const checkIsTextElement = (el) => {
      if (!el || !(el instanceof Element)) return false;
      return Boolean(
        el.closest(
          'input:not([type="button"]):not([type="submit"]):not([type="radio"]):not([type="checkbox"]), textarea, [contenteditable="true"], .cursor-text'
        )
      );
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        currentX = mouseX;
        currentY = mouseY;
      }

      const target = e.target;
      const onText = checkIsTextElement(target);
      
      // Check if user is currently selecting text
      const selection = window.getSelection();
      const hasTextSelection = Boolean(selection && !selection.isCollapsed && selection.toString().length > 0);

      isOverText = onText || hasTextSelection || isSelecting;

      if (isOverText) {
        document.body.classList.add('cursor-native-text');
        isHovering = false;
      } else {
        document.body.classList.remove('cursor-native-text');
        const interactive = target && target instanceof Element
          ? target.closest('a, button, [role="button"], select, label, [tabindex="0"], summary, .cursor-pointer')
          : null;
        isHovering = Boolean(interactive);
      }

      updateVisualState();
    };

    const onMouseDown = (e) => {
      isClicking = true;
      const target = e.target;
      if (checkIsTextElement(target)) {
        isSelecting = true;
        isOverText = true;
        document.body.classList.add('cursor-native-text');
      }
      updateVisualState();
    };

    const onMouseUp = () => {
      isClicking = false;
      isSelecting = false;
      
      // Delay check so selection object updates
      setTimeout(() => {
        const selection = window.getSelection();
        const hasSelection = Boolean(selection && !selection.isCollapsed && selection.toString().length > 0);
        const hoveredEl = typeof document.elementFromPoint === 'function' ? document.elementFromPoint(mouseX, mouseY) : null;
        if (!hasSelection && !checkIsTextElement(hoveredEl)) {
          isOverText = false;
          document.body.classList.remove('cursor-native-text');
        }
        updateVisualState();
      }, 30);
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (cursorEl) cursorEl.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      updateVisualState();
    };

    const onSelectionChange = () => {
      const selection = window.getSelection();
      const hasTextSelection = Boolean(selection && !selection.isCollapsed && selection.toString().length > 0);
      if (hasTextSelection) {
        isOverText = true;
        document.body.classList.add('cursor-native-text');
      }
      updateVisualState();
    };

    const updateVisualState = () => {
      if (!cursorEl || !dotEl) return;

      if (!isVisible || isOverText) {
        cursorEl.style.opacity = '0';
        return;
      }

      cursorEl.style.opacity = '1';

      if (isClicking) {
        dotEl.style.transform = 'scale(0.85)';
      } else if (isHovering) {
        dotEl.style.transform = 'scale(1.5)';
      } else {
        dotEl.style.transform = 'scale(1)';
      }
    };

    // Smooth fluid interpolation loop (60/120Hz native render)
    const animate = () => {
      const ease = 0.28;
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      if (cursorEl) {
        cursorEl.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter, { passive: true });
    document.addEventListener('selectionchange', onSelectionChange, { passive: true });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      document.body.classList.remove('cursor-native-text');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('selectionchange', onSelectionChange);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="cherie-custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] opacity-0"
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
        willChange: 'transform, opacity',
      }}
    >
      {/* 11px diameter solid dusty-pink circle with very subtle glow */}
      <div
        ref={dotRef}
        className="w-[11px] h-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D98FA4] shadow-[0_0_6px_1px_rgba(217,143,164,0.45),0_0_12px_rgba(217,143,164,0.2)] transition-transform duration-200 ease-out"
      />
    </div>
  );
}
