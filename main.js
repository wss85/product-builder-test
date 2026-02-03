// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Navbar background on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
      } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      }
    });
  }

  // 힐링타임 모달
  const healingBtn = document.getElementById('healingBtn');
  const healingModal = document.getElementById('healingModal');
  const healingClose = document.getElementById('healingClose');

  if (healingBtn && healingModal && healingClose) {
    // 모달 열기
    healingBtn.addEventListener('click', function() {
      healingModal.style.display = 'flex';
      setTimeout(() => healingModal.classList.add('active'), 10);
      document.body.style.overflow = 'hidden';
    });

    // 닫기 버튼
    healingClose.addEventListener('click', function() {
      closeHealingModal();
    });

    // 배경 클릭 시 닫기
    healingModal.addEventListener('click', function(e) {
      if (e.target === healingModal) {
        closeHealingModal();
      }
    });

    // ESC 키로 닫기
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && healingModal.classList.contains('active')) {
        closeHealingModal();
      }
    });

    function closeHealingModal() {
      healingModal.classList.remove('active');
      setTimeout(() => {
        healingModal.style.display = 'none';
        document.body.style.overflow = '';
      }, 300);
    }
  }
});
