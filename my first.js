document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const text = this.getAttribute("data-text");
      navigator.clipboard.writeText(text);

      this.classList.add("copied");
      let old = this.textContent;
      this.textContent = "Copied!";
      setTimeout(() => {
        this.textContent = old;
        this.classList.remove("copied");
      }, 1200);
    });
  });