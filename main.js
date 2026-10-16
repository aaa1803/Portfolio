/**
 * 애플리케이션 초기화 함수
 */
function initApp() {
    initWelfareExperience();
    initTravelGallery();
    initPhotoModal();
    initNavigationLinks();
    initWatercolorRipples();
}

/**
 * 4가지 사회복지사 실천 경험 데이터
 */
const welfareExperienceData = {
    'exp-planning': {
        title: '프로그램 기획 및 운영',
        badge: '기획 & 운영',
        icon: '📋',
        role: '지역사회 복지 수요 조사를 바탕으로 아동·어르신 맞춤형 프로그램을 기획하고, 연간 운영 및 성과 분석을 총괄했습니다.',
        highlights: [
            '수요 기반 8개 신규 특화 프로그램 론칭 (아동 방과 후 문화예술교실, 어르신 스마트폰·디지털 리터러시)',
            '프로그램 전·후 만족도 조사 및 질적 인터뷰 분석을 통한 환류 체계 구축 (참여자 종합 만족도 94.8% 달성)',
            '지자체 주민참여 예산 공모 및 민간 재단 지원 사업 선정으로 사업 예산 2,500만 원 확보 및 투명한 집행',
            '지역 유관기관(학교, 작은도서관, 주민센터)과의 협력 네트워크 구축을 통한 사업 시너지 창출'
        ],
        insight: '주민들의 실제 목소리를 세심하게 반영한 기획일 때 참여자의 주도성과 프로그램의 지속 가능성이 극대화된다는 것을 체득했습니다.'
    },
    'exp-volunteers': {
        title: '자원봉사 및 서포터즈 관리',
        badge: '봉사 & 서포터즈',
        icon: '🤝',
        role: '150여 명의 정기·수시 자원봉사자를 체계적으로 조직화하고, 대학생 청년 서포터즈를 양성하여 복지 활동을 확산했습니다.',
        highlights: [
            '개인 역량 및 활동 가능 일정에 맞춘 봉사자 DB 시스템화로 중도 이탈률 감소 및 지속 활동률 35% 증대',
            '대학생 청년 서포터즈 1·2기 기획 및 운영 (복지 정보 카드뉴스 제작, 숏폼 인터뷰 영상, 복지 사각지대 발굴 캠페인)',
            '봉사자 동기부여를 위한 정기 온보딩 교육 및 분기별 소통 간담회 정례화',
            '연말 자원봉사자의 밤 행사 기획 및 우수 봉사자 감사 표창, 활동 수기집 \'따뜻한 동행\' 발간'
        ],
        insight: '자원봉사자는 단순한 인력 지원이 아니라, 복지 현장의 가장 든든한 동반자이자 지역사회의 온기를 전하는 메신저임을 깨달았습니다.'
    },
    'exp-casework': {
        title: '현장 실무 및 사례관리',
        badge: '현장 & 사례관리',
        icon: '🏠',
        role: '복지 사각지대 위기가구를 발굴하고, 통합사례관리를 통해 개별 맞춤형 공공·민간 복지 자원을 연계했습니다.',
        highlights: [
            '위기 취약계층 50가구 대상 심층 가정방문 및 초기 욕구 사정 (독거 어르신, 한부모가정, 돌봄 위기가구)',
            '민·관 협력 솔루션 통합사례회의 주재 (주민센터, 병원, 정신건강복지센터, 법률구조공단 연계)',
            '긴급 생계비·의료비 지원 및 주거환경 개선 사업 연계를 통한 위기 상황의 조기 안정화',
            '당사자의 자기결정권을 존중한 개별 자립 목표 수립 및 장기 모니터링 (목표 달성률 85% 달성)'
        ],
        insight: '일방적인 도움을 건네는 문제 해결자가 되기보다, 당사자가 삶의 주체로서 스스로 일어설 수 있도록 곁을 지키는 것이 사례관리의 본질임을 배웠습니다.'
    },
    'exp-competency': {
        title: '전문 역량 성장',
        badge: '전문 역량 성장',
        icon: '📈',
        role: '더 높은 신뢰와 온기를 전하기 위해 사례관리 슈퍼비전, 상담 스킬, 최신 복지 정책 세미나를 지속적으로 이수했습니다.',
        highlights: [
            '한국사회복지사협회 통합사례관리 심화과정(30시간) 및 위기 개입 상담 워크숍(30시간) 수료',
            '사례관리 전문가 슈퍼비전 정기 참여를 통한 실천 기록 점검 및 전문가 피드백 수용',
            '원내 동료 실무자 \'최신 복지 트렌드 및 법률 개정 스터디\' 결성 및 정기 스터디 리딩',
            '인권 기반 사회복지 실천 가이드라인 워크숍 수료 및 현장 윤리 실천 규범 준수'
        ],
        insight: '배움을 멈추지 않는 개발과 성장이 곧 서비스 이용자에게 더 신뢰받는 실천으로 이어진다는 신념을 갖게 되었습니다.'
    }
};

/**
 * 사회복지사 세부 항목 및 갤러리 인터랙션 초기화
 */
function initWelfareExperience() {
    const subCatBtns = document.querySelectorAll('.sub-cat-btn');
    const tabBtns = document.querySelectorAll('.welfare-tabs .tab-btn');
    const expCards = document.querySelectorAll('.exp-card');
    const viewBtns = document.querySelectorAll('.exp-view-btn');

    const expModal = document.getElementById('experienceModal');
    const modalIcon = document.getElementById('expModalIcon');
    const modalBadge = document.getElementById('expModalBadge');
    const modalTitle = document.getElementById('expModalTitle');
    const modalRole = document.getElementById('expModalRole');
    const modalList = document.getElementById('expModalList');
    const modalInsight = document.getElementById('expModalInsight');
    const modalCloseBtn = document.getElementById('expModalCloseBtn');
    const modalOverlay = document.getElementById('expModalOverlay');

    // 경험 상세 모달 열기 함수
    function openExperienceModal(expId) {
        const data = welfareExperienceData[expId];
        if (!data || !expModal) return;

        modalIcon.textContent = data.icon;
        modalBadge.textContent = data.badge;
        modalTitle.textContent = data.title;
        modalRole.textContent = data.role;
        modalInsight.textContent = data.insight;

        // 리스트 항목 렌더링
        modalList.innerHTML = '';
        data.highlights.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            modalList.appendChild(li);
        });

        expModal.classList.add('is-open');
        expModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    // 경험 상세 모달 닫기 함수
    function closeExperienceModal() {
        if (!expModal) return;
        expModal.classList.remove('is-open');
        expModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeExperienceModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeExperienceModal);

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && expModal && expModal.classList.contains('is-open')) {
            closeExperienceModal();
        }
    });

    // 갤러리 카드 필터 함수
    function filterCards(filterCategory) {
        expCards.forEach(card => {
            const cardCat = card.dataset.category;
            if (filterCategory === 'all' || cardCat === filterCategory) {
                card.classList.remove('is-hidden');
            } else {
                card.classList.add('is-hidden');
            }
        });

        // 탭 버튼 활성화 상태 갱신
        tabBtns.forEach(btn => {
            if (btn.dataset.filter === filterCategory) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // 탭 클릭 이벤트
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            filterCards(filter);
        });
    });

    // 특정 카드 강조 및 스크롤
    function focusExperience(expId) {
        filterCards('all'); // 전체 보이기로 리셋하여 숨김 방지

        expCards.forEach(card => {
            if (card.id === expId) {
                card.classList.add('is-highlighted');
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                card.classList.remove('is-highlighted');
            }
        });

        // 사이드바 세부 항목 활성화 표시
        subCatBtns.forEach(btn => {
            if (btn.dataset.expId === expId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // 왼쪽 사이드바 세부 항목 클릭 시 연동
    subCatBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const expId = btn.dataset.expId;
            focusExperience(expId);
            // 클릭 시 바로 상세 모달 팝업으로 경험 상세 보기 제공
            setTimeout(() => {
                openExperienceModal(expId);
            }, 300);
        });
    });

    // 갤러리 카드 클릭 시 모달 열기
    expCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const expId = card.id;
            focusExperience(expId);
            openExperienceModal(expId);
        });
    });

    // "경험 상세 보기" 버튼 클릭
    viewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const expId = btn.dataset.expTarget;
            focusExperience(expId);
            openExperienceModal(expId);
        });
    });
}

/**
 * 여행 항목 사진 갤러리 토글 및 네비게이션 연동
 */
function initTravelGallery() {
    const toggleBtn = document.getElementById('toggleTravelPhotos');
    const gallery = document.getElementById('travelGallery');

    if (!toggleBtn || !gallery) return;

    // 사진 갤러리 열기/닫기 함수
    function toggleGallery(forceOpen = null) {
        const isHidden = gallery.hasAttribute('hidden');
        const shouldOpen = forceOpen !== null ? forceOpen : isHidden;

        if (shouldOpen) {
            gallery.removeAttribute('hidden');
            toggleBtn.setAttribute('aria-expanded', 'true');
            toggleBtn.querySelector('.btn-label').textContent = '여행 사진 접기';
        } else {
            gallery.setAttribute('hidden', '');
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.querySelector('.btn-label').textContent = '여행 사진 보기 (자료 3장)';
        }
    }

    // 버튼 클릭 이벤트
    toggleBtn.addEventListener('click', () => {
        toggleGallery();
    });

    // 헤더 및 사이드바의 '여행' 링크 클릭 시 자동으로 갤러리 펼치기
    const travelLinks = document.querySelectorAll('a[href="#travel"]');
    travelLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                toggleGallery(true);
            }, 150);
        });
    });
}

/**
 * 여행 사진 라이트박스 모달 (크게 보기)
 */
function initPhotoModal() {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const closeBtn = document.getElementById('modalCloseBtn');
    const overlay = document.getElementById('modalOverlay');

    if (!modal || !modalImg) return;

    function openModal(src, title, desc) {
        modalImg.src = src;
        modalImg.alt = title;
        modalTitle.textContent = title;
        modalDesc.textContent = desc;

        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setTimeout(() => {
            modalImg.src = '';
        }, 300);
    }

    // 갤러리 카드 클릭 시 모달 열기
    const cards = document.querySelectorAll('.gallery-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const src = card.dataset.src;
            const title = card.dataset.title;
            const desc = card.dataset.desc;
            openModal(src, title, desc);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
}

/**
 * 네비게이션 활성화 표시
 */
function initNavigationLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// DOM 준비 완료 시 초기화 실행
document.addEventListener('DOMContentLoaded', initApp);

/**
 * 수채화 물방울 번짐 마이크로 인터랙션 (버튼 및 인터랙티브 요소 클릭 효과)
 */
function initWatercolorRipples() {
    const targets = document.querySelectorAll('.tab-btn, .photo-toggle-btn, .exp-view-btn, .nav-link, .tag, .sub-cat-btn, .brand-badge');
    targets.forEach(el => {
        el.addEventListener('pointerdown', (e) => {
            const rect = el.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'water-ripple';
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            el.appendChild(ripple);
            setTimeout(() => {
                ripple.remove();
            }, 800);
        });
    });
}
