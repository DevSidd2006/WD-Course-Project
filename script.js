document.addEventListener('DOMContentLoaded', function() {
    const bannerSlider = document.querySelector('.banner-slider');
    const slides = document.querySelectorAll('.banner-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    if (slides.length > 0) {
        showSlide(0);
        startSlideshow();

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                stopSlideshow();
                nextSlide();
                startSlideshow();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                stopSlideshow();
                prevSlide();
                startSlideshow();
            });
        }

        bannerSlider.addEventListener('mouseenter', stopSlideshow);
        bannerSlider.addEventListener('mouseleave', startSlideshow);
    }

    function startBannerSlider() {
        const slides = document.querySelectorAll('.banner-slide');
        let current = 0;
        if (slides.length === 0) return;
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 3000);
    }

    const fontSizeControls = document.querySelectorAll('.font-size');
    let currentFontSize = 16;

    fontSizeControls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault();
            const size = this.getAttribute('data-size');
            
            if (size === 'small') {
                currentFontSize = Math.max(12, currentFontSize - 2);
            } else if (size === 'large') {
                currentFontSize = Math.min(24, currentFontSize + 2);
            } else if (size === 'normal') {
                currentFontSize = 16;
            }
            
            document.body.style.fontSize = currentFontSize + 'px';
            
            localStorage.setItem('preferredFontSize', currentFontSize);
        });
    });

    const savedFontSize = localStorage.getItem('preferredFontSize');
    if (savedFontSize) {
        currentFontSize = parseInt(savedFontSize);
        document.body.style.fontSize = currentFontSize + 'px';
    }    const translations = {
        hindi: {
            'DEPARTMENT OF AGRICULTURE & FARMERS WELFARE': 'कृषि एवं किसान कल्याण विभाग',
            'GOVERNMENT OF INDIA': 'भारत सरकार',
            'MINISTRY OF AGRICULTURE & FARMERS WELFARE': 'कृषि एवं किसान कल्याण मंत्रालय',
            
            'About Us': 'हमारे बारे में',
            'Divisions': 'प्रभाग',
            'Acts & Rules': 'अधिनियम एवं नियम',
            'Documents': 'दस्तावेज़',
            'Statistics': 'सांख्यिकी',
            'Schemes': 'योजनाएं',
            'Market Intelligence Report': 'मार्केट इंटेलिजेंस रिपोर्ट',
            'Dashboard': 'डैशबोर्ड',
            'Recruitment': 'भर्ती',
            'Media': 'मीडिया',
            'Related Links': 'सम्बंधित लिंक्स',
            'Downloads': 'डाउनलोड',

            'Hon\'ble Minister of Agriculture & Farmers Welfare': 'माननीय कृषि एवं किसान कल्याण मंत्री',
            'Hon\'ble State Minister': 'माननीय राज्य मंत्री',

            'DA&FW Organization': 'डी ए & एफ डब्ल्यू संगठन',
            'DA&FW is organized into 27 divisions and five attached offices and twenty one subordinate offices spread across the country for coordination with state level agencies and implementation of centrally sponsored schemes in their respective areas.': 'डी ए & एफ डब्ल्यू 27 प्रभागों में संगठित और पांच संलग्न कार्यालयों और इक्कीस अधीनस्थ कार्यालयों जो राज्य स्तर की एजेंसियों और अपने संबंधित क्षेत्रों में केन्द्रीय क्षेत्र की योजनाओं के कार्यान्वयन के साथ समन्वय के लिए देश भर में फैले हुए हैं।',
            'New Initiatives': 'नई पहल',
            'What\'s New': 'नया क्या है',
            'Read More': 'और देखें',
            'Krishi Geet': 'कृषि गीत',

            'Agricultural News': 'कृषि समाचार',
            'Previous': 'पिछला',
            'Next': 'अगला',

            'Agricultural Reforms': 'कृषि सुधार',
            'Budget 2022-23 Webinar': 'बजट 2022-23 वेबिनार',
            'E-Collection of published articles on Agricultural Reform Act 2020': 'कृषि सुधार अधिनियम 2020 पर प्रकाशित लेखों का ई-संग्रह',
            'Central Sector Scheme of financing facility under Agriculture Infrastructure Fund': 'कृषि अवसंरचना निधि के तहत वित्त पोषण सुविधा की केंद्रीय क्षेत्र योजना',
            'S.O.P for Drones': 'ड्रोन के लिए एस.ओ.पी',
            'Guidelines for Agriculture Infrastructure Fund in Hindi': 'एग्रीकल्चर इन्फ्रास्ट्रक्चर फंड की हिंदी में दिशा-निर्देश',

            'Farming Agreement': 'कृषि समझौता',
            'Model Agriculture Agreement Banana': 'मॉडल कृषि करार केला',
            'Model Farming Agreement on Banana in Regional Languages': 'क्षेत्रीय भाषाओं में केले पर मॉडल खेती समझौता',
            'Farmer Welfare': 'किसान कल्याण',
            'MoU on developing proof of concepts on farmers database': 'किसानों के डेटाबेस पर अवधारणाओं के प्रमाण विकसित करने पर समझौता ज्ञापन',

            'Social Media': 'सोशल मीडिया',

            'Quick Links': 'त्वरित लिंक',
            'Home': 'होम',
            'Contact Us': 'संपर्क करें',
            'Ministry of Agriculture & Farmers Welfare': 'कृषि एवं किसान कल्याण मंत्रालय',
            'New Delhi, India': 'नई दिल्ली, भारत',
            'Follow Us': 'हमें फॉलो करें',
            'All Rights Reserved': 'सभी अधिकार सुरक्षित',

            'Skip to Main Content': 'मुख्य सामग्री पर जाएं',
            'Screen Reader Access': 'स्क्रीन रीडर एक्सेस',
            'Search': 'खोजें'
        },

        english: {
            'कृषि एवं किसान कल्याण विभाग': 'DEPARTMENT OF AGRICULTURE & FARMERS WELFARE',
            'भारत सरकार': 'GOVERNMENT OF INDIA',
            'कृषि एवं किसान कल्याण मंत्रालय': 'MINISTRY OF AGRICULTURE & FARMERS WELFARE',
            
            'हमारे बारे में': 'About Us',
            'प्रभाग': 'Divisions',
            'अधिनियम एवं नियम': 'Acts & Rules',
            'दस्तावेज़': 'Documents',
            'सांख्यिकी': 'Statistics',
            'योजनाएं': 'Schemes',
            'मार्केट इंटेलिजेंस रिपोर्ट': 'Market Intelligence Report',
            'डैशबोर्ड': 'Dashboard',
            'भर्ती': 'Recruitment',
            'मीडिया': 'Media',
            'सम्बंधित लिंक्स': 'Related Links',
            'डाउनलोड': 'Downloads',

            'माननीय कृषि एवं किसान कल्याण मंत्री': 'Hon\'ble Minister of Agriculture & Farmers Welfare',
            'माननीय राज्य मंत्री': 'Hon\'ble State Minister',

            'डी ए & एफ डब्ल्यू संगठन': 'DA&FW Organization',
            'डी ए & एफ डब्ल्यू 27 प्रभागों में संगठित और पांच संलग्न कार्यालयों और इक्कीस अधीनस्थ कार्यालयों जो राज्य स्तर की एजेंसियों और अपने संबंधित क्षेत्रों में केन्द्रीय क्षेत्र की योजनाओं के कार्यान्वयन के साथ समन्वय के लिए देश भर में फैले हुए हैं।': 'DA&FW is organized into 27 divisions and five attached offices and twenty one subordinate offices spread across the country for coordination with state level agencies and implementation of centrally sponsored schemes in their respective areas.',
            'कृषि गीत': 'Krishi Geet',
            'नई पहल': 'New Initiatives',
            'नया क्या है': 'What\'s New',
            'और देखें': 'Read More',

            'कृषि समाचार': 'Agricultural News',
            'prev': 'Previous',
            'next': 'Next',

            'कृषि सुधार': 'Agricultural Reforms',
            'बजट 2022-23 वेबिनार': 'Budget 2022-23 Webinar',
            'कृषि सुधार अधिनियम 2020 पर प्रकाशित लेखों का ई-संग्रह': 'E-Collection of published articles on Agricultural Reform Act 2020',
            'कृषि अवसंरचना निधि के तहत वित्त पोषण सुविधा की केंद्रीय क्षेत्र योजना': 'Central Sector Scheme of financing facility under Agriculture Infrastructure Fund',
            'ड्रोन के लिए एस.ओ.पी': 'S.O.P for Drones',
            'एग्रीकल्चर इन्फ्रास्ट्रक्चर फंड की हिंदी में दिशा-निर्देश': 'Guidelines for Agriculture Infrastructure Fund in Hindi',

            'कृषि समझौता': 'Farming Agreement',
            'मॉडल कृषि करार केला': 'Model Agriculture Agreement Banana',
            'क्षेत्रीय भाषाओं में केले पर मॉडल खेती समझौता': 'Model Farming Agreement on Banana in Regional Languages',
            'किसान कल्याण': 'Farmer Welfare',
            'किसानों के डेटाबेस पर अवधारणाओं के प्रमाण विकसित करने पर समझौता ज्ञापन': 'MoU on developing proof of concepts on farmers database',

            'सोशल मीडिया': 'Social Media',

            'त्वरित लिंक': 'Quick Links',
            'होम': 'Home',
            'संपर्क करें': 'Contact Us',
            'कृषि एवं किसान कल्याण मंत्रालय': 'Ministry of Agriculture & Farmers Welfare',
            'नई दिल्ली, भारत': 'New Delhi, India',
            'हमें फॉलो करें': 'Follow Us',
            'सभी अधिकार सुरक्षित': 'All Rights Reserved',

            'मुख्य सामग्री पर जाएं': 'Skip to Main Content',
            'स्क्रीन रीडर एक्सेस': 'Screen Reader Access',
            'खोजें': 'Search'
        }
    };    function switchLanguage(language) {
        const isHindi = language === 'हिंदी' || language === 'hindi';
        const translationMap = isHindi ? translations.hindi : translations.english;
        
        document.documentElement.lang = isHindi ? 'hi' : 'en';
        
        document.title = isHindi ? 
            'कृषि एवं किसान कल्याण विभाग | कृषि एवं किसान कल्याण मंत्रालय | भारत सरकार' :
            'Department of Agriculture & Farmers Welfare | Ministry of Agriculture & Farmers Welfare | Government of India';

        const ministryInfo = document.querySelector('.ministry-info');
        if (ministryInfo && isHindi) {
            ministryInfo.innerHTML = `
                <h1>कृषि एवं किसान कल्याण विभाग</h1>
                <h2>DEPARTMENT OF AGRICULTURE & FARMERS WELFARE</h2>
                <h3>भारत सरकार | GOVERNMENT OF INDIA</h3>
                <h4>कृषि एवं किसान कल्याण मंत्रालय</h4>
                <h5>MINISTRY OF AGRICULTURE & FARMERS WELFARE</h5>
            `;
        } else if (ministryInfo && !isHindi) {
            ministryInfo.innerHTML = `
                <h1>DEPARTMENT OF AGRICULTURE & FARMERS WELFARE</h1>
                <h2>कृषि एवं किसान कल्याण विभाग</h2>
                <h3>GOVERNMENT OF INDIA | भारत सरकार</h3>
                <h4>MINISTRY OF AGRICULTURE & FARMERS WELFARE</h4>
                <h5>कृषि एवं किसान कल्याण मंत्रालय</h5>
            `;
        }

        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            const textEn = link.dataset.en;
            const textHi = link.dataset.hi;

            if (isHindi && textHi) {
                link.innerHTML = textHi;
            } else if (!isHindi && textEn) {
                link.innerHTML = textEn;
            } else {
            }
        });

        const ministerCards = document.querySelectorAll('.minister-card p');
        if (isHindi) {
            const hindiMinisterTitles = [
                'माननीय कृषि एवं किसान कल्याण मंत्री',
                'माननीय राज्य मंत्री',
                'माननीय राज्य मंत्री'
            ];
            ministerCards.forEach((p, index) => {
                if (hindiMinisterTitles[index]) {
                    p.textContent = hindiMinisterTitles[index];
                }
            });
        } else {
            const englishMinisterTitles = [
                'Hon\'ble Minister of Agriculture & Farmers Welfare',
                'Hon\'ble State Minister',
                'Hon\'ble State Minister'
            ];
            ministerCards.forEach((p, index) => {
                if (englishMinisterTitles[index]) {
                    p.textContent = englishMinisterTitles[index];
                }
            });
        }

        updateContentSections(isHindi);
        
        updateFooter(isHindi);

        updateAccessibilityElements(isHindi);        localStorage.setItem('preferredLanguage', language);
        
        announceLanguageChange(isHindi ? 'Hindi' : 'English');
        
        console.log(`Language switched to: ${isHindi ? 'Hindi' : 'English'}`);
    }

    function updateContentSections(isHindi) {
        const orgSection = document.querySelector('.org-info');
        if (orgSection && isHindi) {
            orgSection.innerHTML = `
                <h2>डी ए & एफ डब्ल्यू संगठन</h2>
                <p>डी ए & एफ डब्ल्यू 27 प्रभागों में संगठित और पांच संलग्न कार्यालयों और इक्कीस अधीनस्थ कार्यालयों जो राज्य स्तर की एजेंसियों और अपने संबंधित क्षेत्रों में केन्द्रीय क्षेत्र की योजनाओं के कार्यान्वयन के साथ समन्वय के लिए देश भर में फैले हुए हैं।</p>
                <a href="#" class="read-more">और देखें</a>
            `;
        } else if (orgSection && !isHindi) {
            orgSection.innerHTML = `
                <h2>DA&FW Organization</h2>
                <p>DA&FW is organized into 27 divisions and five attached offices and twenty one subordinate offices spread across the country for coordination with state level agencies and implementation of centrally sponsored schemes in their respective areas.</p>
                <a href="#" class="read-more">Read More</a>
            `;
        }

        const initiativesSection = document.querySelector('.new-initiatives h2');
        if (initiativesSection) {
            initiativesSection.textContent = isHindi ? 'नई पहल' : 'New Initiatives';
        }

        const whatsNewSection = document.querySelector('.whats-new h2');
        if (whatsNewSection) {
            whatsNewSection.textContent = isHindi ? 'नया क्या है' : 'What\'s New';
        }

        const krishiGeetSection = document.querySelector('.krishi-geet h2');
        if (krishiGeetSection) {
            krishiGeetSection.textContent = isHindi ? 'कृषि गीत' : 'Krishi Geet';
        }

        const agriNewsSection = document.querySelector('.agri-news h2');
        if (agriNewsSection) {
            agriNewsSection.textContent = isHindi ? 'कृषि समाचार' : 'Agricultural News';
        }

        const paginationButtons = document.querySelectorAll('.pagination button');
        paginationButtons.forEach(button => {
            if (button.textContent.includes('prev')) {
                button.textContent = isHindi ? 'पिछला' : 'Previous';
            } else if (button.textContent.includes('next')) {
                button.textContent = isHindi ? 'अगला' : 'Next';
            }
        });

        const reformsSection = document.querySelector('.agri-reforms h2');
        if (reformsSection) {
            reformsSection.textContent = isHindi ? 'कृषि सुधार' : 'Agricultural Reforms';
        }

        const farmingSection = document.querySelector('.farming-agreement h2');
        if (farmingSection) {
            farmingSection.textContent = isHindi ? 'कृषि समझौता' : 'Farming Agreement';
        }        const socialSection = document.querySelector('.social-media h2');
        if (socialSection) {
            socialSection.textContent = isHindi ? 'सोशल मीडिया' : 'Social Media';
        }

        // Update read more button text and reinitialize functionality
        const readMoreButtons = document.querySelectorAll('.read-more-btn');
        readMoreButtons.forEach(link => {
            link.textContent = isHindi ? 'और देखें' : 'Read More';
        });
        
        // Reinitialize read more functionality after language change
        initializeReadMore();
    }

    function updateFooter(isHindi) {
        const footerSections = document.querySelectorAll('.footer-section h3');
        if (isHindi) {
            const hindiFooterHeadings = ['त्वरित लिंक', 'संपर्क करें', 'हमें फॉलो करें'];
            footerSections.forEach((heading, index) => {
                if (hindiFooterHeadings[index]) {
                    heading.textContent = hindiFooterHeadings[index];
                }
            });
        } else {
            const englishFooterHeadings = ['Quick Links', 'Contact Us', 'Follow Us'];
            footerSections.forEach((heading, index) => {
                if (englishFooterHeadings[index]) {
                    heading.textContent = englishFooterHeadings[index];
                }
            });
        }

        const contactSection = document.querySelectorAll('.footer-section p');
        if (contactSection.length >= 2) {
            if (isHindi) {
                contactSection[0].textContent = 'कृषि एवं किसान कल्याण मंत्रालय';
                contactSection[1].textContent = 'नई दिल्ली, भारत';
            } else {
                contactSection[0].textContent = 'Ministry of Agriculture & Farmers Welfare';
                contactSection[1].textContent = 'New Delhi, India';
            }
        }

        const footerBottom = document.querySelector('.footer-bottom p');
        if (footerBottom) {
            footerBottom.textContent = isHindi ? 
                '© 2024 Agriwelfare. सभी अधिकार सुरक्षित।' : 
                '© 2024 Agriwelfare. All Rights Reserved.';
        }

        const footerLinks = document.querySelectorAll('.footer-section ul a');
        if (isHindi) {
            const hindiFooterLinks = ['होम', 'हमारे बारे में', 'योजनाएं', 'संपर्क करें'];
            footerLinks.forEach((link, index) => {
                if (hindiFooterLinks[index]) {
                    link.textContent = hindiFooterLinks[index];
                }
            });
        } else {
            const englishFooterLinks = ['Home', 'About Us', 'Schemes', 'Contact'];
            footerLinks.forEach((link, index) => {
                if (englishFooterLinks[index]) {
                    link.textContent = englishFooterLinks[index];
                }
            });
        }
    }

    function updateAccessibilityElements(isHindi) {
        const skipLink = document.querySelector('a[href="#main-content"]');
        if (skipLink) {
            skipLink.textContent = isHindi ? 'मुख्य सामग्री पर जाएं' : 'Skip to Main Content';
        }

        const screenReaderLink = document.querySelector('.quick-links a:nth-child(2)');
        if (screenReaderLink) {
            screenReaderLink.textContent = isHindi ? 'स्क्रीन रीडर एक्सेस' : 'Screen Reader Access';
        }

        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.placeholder = isHindi ? 'खोजें...' : 'Search...';
        }
    }

    function addLanguageSwitchingEffects() {
        const languageSpans = document.querySelectorAll('.language-selector span');
        
        languageSpans.forEach(span => {
            span.addEventListener('click', function() {
                const mainContent = document.querySelector('main');
                if (mainContent) {
                    mainContent.classList.add('language-switching');
                }
                
                setTimeout(() => {
                    if (mainContent) {
                        mainContent.classList.remove('language-switching');
                    }
                }, 300);
            });
        });
    }

    addLanguageSwitchingEffects();

    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('keydown', function(e) {
            const spans = this.querySelectorAll('span');
            const currentIndex = Array.from(spans).findIndex(span => span.classList.contains('active'));
            
            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                e.preventDefault();
                spans[currentIndex - 1].click();
                spans[currentIndex - 1].focus();
            } else if (e.key === 'ArrowRight' && currentIndex < spans.length - 1) {
                e.preventDefault();
                spans[currentIndex + 1].click();
                spans[currentIndex + 1].focus();
            }
        });
        
        const spans = languageSelector.querySelectorAll('span');
        spans.forEach(span => {
            span.setAttribute('tabindex', '0');
            span.setAttribute('role', 'button');
            span.setAttribute('aria-label', `Switch to ${span.textContent}`);
        });
    }

    function announceLanguageChange(language) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Language switched to ${language}`;
        announcement.style.cssText = `
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        `;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    const languageSpans = document.querySelectorAll('.language-selector span');
    languageSpans.forEach(span => {
        span.addEventListener('click', function() {
            languageSpans.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            
            switchLanguage(this.textContent);
        });
    });

    function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang === 'hi' ? 'hi' : 'en');
    document.querySelectorAll('[data-en][data-hi]').forEach(function(el) {
        el.textContent = lang === 'hi' ? el.getAttribute('data-hi') : el.getAttribute('data-en');
    });
    document.querySelectorAll('.language-selector span').forEach(function(span) {
        if ((lang === 'hi' && span.textContent.includes('हिंदी')) || (lang === 'en' && span.textContent.includes('English'))) {
            span.classList.add('active');
        } else {
            span.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setLanguage('en');
    document.querySelectorAll('.language-selector span').forEach(function(span) {
        span.addEventListener('click', function() {
            if (span.textContent.includes('हिंदी')) {
                setLanguage('hi');
            } else {
                setLanguage('en');
            }
        });
    });
});    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        languageSpans.forEach(span => {
            if (span.textContent === savedLanguage) {
                span.classList.add('active');
                switchLanguage(savedLanguage);
            } else {
                span.classList.remove('active');
            }
        });
    } else {
        languageSpans.forEach(span => {
            if (span.textContent === 'English') {
                span.classList.add('active');
                switchLanguage('English');
            } else {
                span.classList.remove('active');
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const newsItems = document.querySelectorAll('.news-item');
    const itemsPerPage = 5;
    let currentPage = 1;
    let totalPages = Math.ceil(newsItems.length / itemsPerPage);

    function showNewsPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        
        newsItems.forEach((item, index) => {
            item.style.display = (index >= start && index < end) ? 'block' : 'none';
        });
    }

    if (newsItems.length > itemsPerPage) {
        showNewsPage(1);
        
        const prevPageBtn = document.querySelector('.pagination .prev');
        const nextPageBtn = document.querySelector('.pagination .next');
        
        if (prevPageBtn) {
            prevPageBtn.addEventListener('click', function() {
                if (currentPage > 1) {
                    currentPage--;
                    showNewsPage(currentPage);
                    this.disabled = (currentPage === 1);
                    nextPageBtn.disabled = false;
                }
            });
        }
        
        if (nextPageBtn) {
            nextPageBtn.addEventListener('click', function() {
                if (currentPage < totalPages) {
                    currentPage++;
                    showNewsPage(currentPage);
                    this.disabled = (currentPage === totalPages);
                    prevPageBtn.disabled = false;
                }
            });
        }
        
        if (prevPageBtn) prevPageBtn.disabled = true;
        if (nextPageBtn) nextPageBtn.disabled = (totalPages === 1);
    }

    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Dropdown clicked:', this.textContent);
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.minister-card, .news-item, .program-item, section');
    animateElements.forEach(element => {
        observer.observe(element);
    });    function createMobileMenu() {
        const header = document.querySelector('.main-header .container');
        const nav = document.querySelector('.main-nav');
        
        if (header && nav) {
            if (!document.querySelector('.mobile-menu-btn')) {
                const mobileMenuBtn = document.createElement('button');
                mobileMenuBtn.className = 'mobile-menu-btn';
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i> Menu';
                
                header.appendChild(mobileMenuBtn);
                
                function toggleMobileButton() {
                    if (window.innerWidth <= 768) {
                        mobileMenuBtn.style.display = 'block';
                        nav.classList.remove('show');
                    } else {
                        mobileMenuBtn.style.display = 'none';
                        nav.classList.add('show');
                        nav.style.display = 'block';
                    }
                }
                
                toggleMobileButton();
                window.addEventListener('resize', toggleMobileButton);
                
                mobileMenuBtn.addEventListener('click', function() {
                    nav.classList.toggle('show');
                    const isVisible = nav.classList.contains('show');
                    this.innerHTML = isVisible ? 
                        '<i class="fas fa-times"></i> Close' : 
                        '<i class="fas fa-bars"></i> Menu';
                });
            }
        }
    }

    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);

    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.getAttribute('target')) {
                this.setAttribute('target', '_blank');
                this.setAttribute('rel', 'noopener noreferrer');
            }
        });
    });

    const pdfLinks = document.querySelectorAll('.pdf-link');
    pdfLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('PDF link clicked:', this.textContent);
        });
    });

    function addSearchFunctionality() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'खोजें...';
        searchInput.className = 'search-input';
        searchInput.style.cssText = `
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-left: 15px;
            display: none;
        `;
        
        const quickLinks = document.querySelector('.quick-links');
        if (quickLinks && window.innerWidth > 768) {
            quickLinks.appendChild(searchInput);
            
            if (window.innerWidth > 768) {
                searchInput.style.display = 'inline-block';
            }
        }
    }

    addSearchFunctionality();

    function enhanceAccessibility() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if (!button.getAttribute('aria-label')) {
                const text = button.textContent || button.innerHTML.replace(/<[^>]*>/g, '');
                button.setAttribute('aria-label', text);
            }
        });

        const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid #007bff';
                this.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });
    }    enhanceAccessibility();

    // Initialize read more functionality for scheme descriptions
    initializeReadMore();

    console.log('Agriwelfare website initialized successfully');
});

// Function to initialize read more functionality
function initializeReadMore() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const description = this.previousElementSibling;
            description.classList.toggle('active');
            this.textContent = description.classList.contains('active') ? 'Read Less' : 'Read More';
        });
    });
}

// Enhanced PDF Download Functionality
    function initializePDFDownloads() {
        const pdfLinks = document.querySelectorAll('.pdf-link');
        
        pdfLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Add downloading state for visual feedback
                this.classList.add('downloading');
                
                // Get file info
                const href = this.getAttribute('href');
                const fileName = this.getAttribute('download');
                
                // Check if it's an external URL
                if (href && href.startsWith('http')) {
                    // For external URLs, we'll open in new tab and show feedback
                    window.open(href, '_blank');
                    
                    // Update UI feedback
                    setTimeout(() => {
                        this.classList.remove('downloading');
                        this.classList.add('downloaded');
                        
                        // Reset after 2 seconds
                        setTimeout(() => {
                            this.classList.remove('downloaded');
                        }, 2000);
                    }, 500);
                    
                    // Prevent default if we handled it
                    e.preventDefault();
                    return;
                }
                
                // For local files, handle download normally
                if (href && href !== '#') {
                    // Create a temporary link for forced download
                    const tempLink = document.createElement('a');
                    tempLink.href = href;
                    if (fileName) {
                        tempLink.download = fileName;
                    }
                    tempLink.style.display = 'none';
                    
                    // Add to DOM, click, and remove
                    document.body.appendChild(tempLink);
                    tempLink.click();
                    document.body.removeChild(tempLink);
                    
                    // Update UI feedback
                    setTimeout(() => {
                        this.classList.remove('downloading');
                        this.classList.add('downloaded');
                        
                        // Reset after 2 seconds
                        setTimeout(() => {
                            this.classList.remove('downloaded');
                        }, 2000);
                    }, 500);
                    
                    // Prevent default link behavior
                    e.preventDefault();
                } else if (href === '#') {
                    // Handle placeholder links
                    alert('This document is not yet available for download.');
                    this.classList.remove('downloading');
                    e.preventDefault();
                }
            });
            
            // Add hover effect enhancement
            link.addEventListener('mouseenter', function() {
                const href = this.getAttribute('href');
                if (href && href.startsWith('http')) {
                    this.title = 'Click to download: ' + (this.getAttribute('download') || 'Document');
                }
            });
        });
    }

    // Initialize PDF downloads
    initializePDFDownloads();

    // ...existing code...