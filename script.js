// الكلمة السرية (يمكنكِ تغييرها هنا)
const CORRECT_PASSWORD = "1912";

// ربط العناصر من HTML
const lockScreen = document.getElementById('lock-screen');
const mainContent = document.getElementById('main-content');
const finalMessageScreen = document.getElementById('final-message-screen');
const passwordInput = document.getElementById('password-input');
const errorMessage = document.getElementById('error-message');
const startJourneyBtn = document.getElementById('start-journey');
const memoriesSection = document.getElementById('memories-section');
const showFinalMessageBtn = document.getElementById('show-final-message');

/**
 * وظيفة للتحقق من كلمة المرور المدخلة
 */
function checkPassword() {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === CORRECT_PASSWORD) {
        // إذا كانت صحيحة: إخفاء القفل وإظهار المحتوى الرئيسي
        lockScreen.style.display = 'none';
        mainContent.style.display = 'block';
        errorMessage.textContent = '';
        // يمكنك إضافة تأثير لطيف هنا
    } else {
        // إذا كانت خاطئة: عرض رسالة خطأ
        errorMessage.textContent = 'To2 guess tany👀';
        passwordInput.value = ''; // مسح الإدخال
    }
}

/**
 * وظيفة لإظهار قسم الذكريات بعد الضغط على "Start Journey"
 */
startJourneyBtn.onclick = function() {
    memoriesSection.style.display = 'block';
    // يمكنك إضافة خاصية التمرير الناعم (Smooth Scroll)
    memoriesSection.scrollIntoView({ behavior: 'smooth' });
};

/**
 * وظيفة لإظهار الرسالة النهائية
 */
showFinalMessageBtn.onclick = function() {
    mainContent.style.display = 'none';
    finalMessageScreen.style.display = 'block';
    finalMessageScreen.scrollIntoView({ behavior: 'smooth' });
};