function themeToggle () {
    const root = document.documentElement
    root.classList.toggle('dark')
  }
  
  localStorage.setItem('theme', 'dark');
  
  //accessed the user's machine theme
  localStorage.getItem('theme');