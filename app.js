function toggleMenu() {
    const menu = document.querySelector('.mobileMenu');
    const profileMenu = document.querySelector('.profileMenu');
    menu.classList.toggle('hidden');
    const main1=document.querySelector('.main1');
    main1.style.margin = "0";
}

function toggleDashBoard(){
    const mobileDashboard = document.querySelector('.mobileDashboard');
    mobileDashboard.classList.toggle('hidden');
}
//=========================================================================
function toggleDashboard(){
    const mainContaint1=document.querySelector('.mainContaint1');
    const mainContaint2=document.querySelector('.mainContaint2');
    const mainContaint3=document.querySelector('.mainContaint3');
    const mainContaint4=document.querySelector('.mainContaint4');
    const mainContaint5=document.querySelector('.mainContaint5');
    const mainContaint6=document.querySelector('.mainContaint6');

    mainContaint1.classList.remove('hidden');
    mainContaint2.classList.add('hidden');
    mainContaint3.classList.add('hidden');
    mainContaint4.classList.add('hidden');
    mainContaint5.classList.add('hidden');
    mainContaint6.classList.add('hidden');

    const dashboard=document.querySelector('.dashboard');
    dashboard.classList.add('dasActive');
    const dashboard1=document.querySelector('.dashboard1');
    dashboard1.classList.add('dasActive');

    const teacher=document.querySelector('.teacher');
    teacher.classList.remove('dasActive');
    const teacher1=document.querySelector('.teacher1');
    teacher1.classList.remove('dasActive');

    const student=document.querySelector('.student');
    student.classList.remove('dasActive');
    const student1=document.querySelector('.student1');
    student1.classList.remove('dasActive');

    const attendance=document.querySelector('.attendance');
    attendance.classList.remove('dasActive');
    const attendance1=document.querySelector('.attendance1');
    attendance1.classList.remove('dasActive');

    const fee=document.querySelector('.fee');
    fee.classList.remove('dasActive');
    const fee1=document.querySelector('.fee1');
    fee1.classList.remove('dasActive');

    const notice=document.querySelector('.notice');
    notice.classList.remove('dasActive');
    const notice1=document.querySelector('.notice1');
    notice1.classList.remove('dasActive');
}

// ==================================================================

function toggleTeacher(){
    const mainContaint1=document.querySelector('.mainContaint1');
    const mainContaint2=document.querySelector('.mainContaint2');
    const mainContaint3=document.querySelector('.mainContaint3');
    const mainContaint4=document.querySelector('.mainContaint4');
    const mainContaint5=document.querySelector('.mainContaint5');
    const mainContaint6=document.querySelector('.mainContaint6');

    mainContaint2.classList.remove('hidden');
    mainContaint1.classList.add('hidden');
    mainContaint3.classList.add('hidden');
    mainContaint4.classList.add('hidden');
    mainContaint5.classList.add('hidden');
    mainContaint6.classList.add('hidden');

    const teacher=document.querySelector('.teacher');
    teacher.classList.add('dasActive');
    const teacher1=document.querySelector('.teacher1');
    teacher1.classList.add('dasActive');

    const dashboard=document.querySelector('.dashboard');
    dashboard.classList.remove('dasActive');
    const dashboard1=document.querySelector('.dashboard1');
    dashboard1.classList.remove('dasActive');

    const student=document.querySelector('.student');
    student.classList.remove('dasActive');
    const student1=document.querySelector('.student1');
    student1.classList.remove('dasActive');

    const attendance=document.querySelector('.attendance');
    attendance.classList.remove('dasActive');
    const attendance1=document.querySelector('.attendance1');
    attendance1.classList.remove('dasActive');

    const fee=document.querySelector('.fee');
    fee.classList.remove('dasActive');
    const fee1=document.querySelector('.fee1');
    fee1.classList.remove('dasActive');

    const notice=document.querySelector('.notice');
    notice.classList.remove('dasActive');
    const notice1=document.querySelector('.notice1');
    notice1.classList.remove('dasActive');

}

function toggleViewAllTeacher(){
    const viewAllTeacher=document.querySelector('.viewAllTeacher');
    viewAllTeacher.classList.remove('hidden');
    

    const noticeBoard2=document.querySelector('.noticeBoard2');
    noticeBoard2.classList.add('hidden');

    const addTeacher=document.querySelector('.addTeacher');
    addTeacher.classList.add('hidden');

    const approveteacher=document.querySelector('.approveteacher');
    approveteacher.classList.add('hidden');

    const teacherSalary=document.querySelector('.teacherSalary');
    teacherSalary.classList.add('hidden');
}

function toggleAddTeacher(){
    const addTeacher=document.querySelector('.addTeacher');
    addTeacher.classList.remove('hidden');

    const noticeBoard2=document.querySelector('.noticeBoard2');
    noticeBoard2.classList.add('hidden');

    const viewAllTeacher=document.querySelector('.viewAllTeacher');
    viewAllTeacher.classList.add('hidden');

    const approveteacher=document.querySelector('.approveteacher');
    approveteacher.classList.add('hidden');

    const teacherSalary=document.querySelector('.teacherSalary');
    teacherSalary.classList.add('hidden');
}

function toggleApproveTeacher(){
    const approveteacher=document.querySelector('.approveteacher');
    approveteacher.classList.remove('hidden');

    const noticeBoard2=document.querySelector('.noticeBoard2');
    noticeBoard2.classList.add('hidden');

    const viewAllTeacher=document.querySelector('.viewAllTeacher');
    viewAllTeacher.classList.add('hidden');

    const addTeacher=document.querySelector('.addTeacher');
    addTeacher.classList.add('hidden');

    const teacherSalary=document.querySelector('.teacherSalary');
    teacherSalary.classList.add('hidden');
}

function toggleViewSalary(){
    const teacherSalary=document.querySelector('.teacherSalary');
    teacherSalary.classList.remove('hidden');

    const noticeBoard2=document.querySelector('.noticeBoard2');
    noticeBoard2.classList.add('hidden');

    const approveteacher=document.querySelector('.approveteacher');
    approveteacher.classList.add('hidden');

    const viewAllTeacher=document.querySelector('.viewAllTeacher');
    viewAllTeacher.classList.add('hidden');

    const addTeacher=document.querySelector('.addTeacher');
    addTeacher.classList.add('hidden');
}


//================================================================================

function toggleStudent(){
    const mainContaint1=document.querySelector('.mainContaint1');
    const mainContaint2=document.querySelector('.mainContaint2');
    const mainContaint3=document.querySelector('.mainContaint3');
    const mainContaint4=document.querySelector('.mainContaint4');
    const mainContaint5=document.querySelector('.mainContaint5');
    const mainContaint6=document.querySelector('.mainContaint6');

    mainContaint3.classList.remove('hidden');
    mainContaint1.classList.add('hidden');
    mainContaint2.classList.add('hidden');
    mainContaint4.classList.add('hidden');
    mainContaint5.classList.add('hidden');
    mainContaint6.classList.add('hidden');


    const student=document.querySelector('.student');
    student.classList.add('dasActive');
    const student1=document.querySelector('.student1');
    student1.classList.add('dasActive');

    const teacher=document.querySelector('.teacher');
    teacher.classList.remove('dasActive');
    const teacher1=document.querySelector('.teacher1');
    teacher1.classList.remove('dasActive');

    const dashboard=document.querySelector('.dashboard');
    dashboard.classList.remove('dasActive');
    const dashboard1=document.querySelector('.dashboard1');
    dashboard1.classList.remove('dasActive');

    const attendance=document.querySelector('.attendance');
    attendance.classList.remove('dasActive');
    const attendance1=document.querySelector('.attendance1');
    attendance1.classList.remove('dasActive');

    const fee=document.querySelector('.fee');
    fee.classList.remove('dasActive');
    const fee1=document.querySelector('.fee1');
    fee1.classList.remove('dasActive');

    const notice=document.querySelector('.notice');
    notice.classList.remove('dasActive');
    const notice1=document.querySelector('.notice1');
    notice1.classList.remove('dasActive');

}

function toggleViewAllStudent(){
    const viewAllTeacher=document.querySelector('.viewAllStudent');
    viewAllTeacher.classList.remove('hidden');

    const noticeBoard3=document.querySelector('.noticeBoard3');
    noticeBoard3.classList.add('hidden');

    const addStudent=document.querySelector('.addStudent');
    addStudent.classList.add('hidden');

    const approveStudent=document.querySelector('.approveStudent');
    approveStudent.classList.add('hidden');

    const studentFee=document.querySelector('.studentFee');
    studentFee.classList.add('hidden');
}

function toggleAddStudent(){
    const addStudent=document.querySelector('.addStudent');
    addStudent.classList.remove('hidden');

    const noticeBoard3=document.querySelector('.noticeBoard3');
    noticeBoard3.classList.add('hidden');

    const viewAllStudent=document.querySelector('.viewAllStudent');
    viewAllStudent.classList.add('hidden');

    const approveStudent=document.querySelector('.approveStudent');
    approveStudent.classList.add('hidden');

    const studentFee=document.querySelector('.studentFee');
    studentFee.classList.add('hidden');
}

function toggleApproveStudent(){
    const approveStudent=document.querySelector('.approveStudent');
    approveStudent.classList.remove('hidden');

    const noticeBoard3=document.querySelector('.noticeBoard3');
    noticeBoard3.classList.add('hidden');

    const viewAllStudent=document.querySelector('.viewAllStudent');
    viewAllStudent.classList.add('hidden');

    const addStudent=document.querySelector('.addStudent');
    addStudent.classList.add('hidden');

    const studentFee=document.querySelector('.studentFee');
    studentFee.classList.add('hidden');
}

function toggleViewStudentFee(){
    const studentFee=document.querySelector('.studentFee');
    studentFee.classList.remove('hidden');

    const noticeBoard3=document.querySelector('.noticeBoard3');
    noticeBoard3.classList.add('hidden');

    const approveStudent=document.querySelector('.approveStudent');
    approveStudent.classList.add('hidden');

    const viewAllStudent=document.querySelector('.viewAllStudent');
    viewAllStudent.classList.add('hidden');

    const addStudent=document.querySelector('.addStudent');
    addStudent.classList.add('hidden');
}


//==========================================================================================

function toggleAttendance(){
    const mainContaint1=document.querySelector('.mainContaint1');
    const mainContaint2=document.querySelector('.mainContaint2');
    const mainContaint3=document.querySelector('.mainContaint3');
    const mainContaint4=document.querySelector('.mainContaint4');
    const mainContaint5=document.querySelector('.mainContaint5');
    const mainContaint6=document.querySelector('.mainContaint6');

    mainContaint4.classList.remove('hidden');
    mainContaint1.classList.add('hidden');
    mainContaint2.classList.add('hidden');
    mainContaint3.classList.add('hidden');
    mainContaint5.classList.add('hidden');
    mainContaint6.classList.add('hidden');

    const attendance=document.querySelector('.attendance');
    attendance.classList.add('dasActive');
    const attendance1=document.querySelector('.attendance1');
    attendance1.classList.add('dasActive');

    const student=document.querySelector('.student');
    student.classList.remove('dasActive');
    const student1=document.querySelector('.student1');
    student1.classList.remove('dasActive');

    const teacher=document.querySelector('.teacher');
    teacher.classList.remove('dasActive');
    const teacher1=document.querySelector('.teacher1');
    teacher1.classList.remove('dasActive');

    const dashboard=document.querySelector('.dashboard');
    dashboard.classList.remove('dasActive');
    const dashboard1=document.querySelector('.dashboard1');
    dashboard1.classList.remove('dasActive');

    const fee=document.querySelector('.fee');
    fee.classList.remove('dasActive');
    const fee1=document.querySelector('.fee1');
    fee1.classList.remove('dasActive');

    const notice=document.querySelector('.notice');
    notice.classList.remove('dasActive');
    const notice1=document.querySelector('.notice1');
    notice1.classList.remove('dasActive');
}

//===================================================================================================

function toggleFee(){
    const mainContaint1=document.querySelector('.mainContaint1');
    const mainContaint2=document.querySelector('.mainContaint2');
    const mainContaint3=document.querySelector('.mainContaint3');
    const mainContaint4=document.querySelector('.mainContaint4');
    const mainContaint5=document.querySelector('.mainContaint5');
    const mainContaint6=document.querySelector('.mainContaint6');

    mainContaint5.classList.remove('hidden');
    mainContaint4.classList.add('hidden');
    mainContaint1.classList.add('hidden');
    mainContaint2.classList.add('hidden');
    mainContaint3.classList.add('hidden');
    mainContaint6.classList.add('hidden');

    const fee=document.querySelector('.fee');
    fee.classList.add('dasActive');
    const fee1=document.querySelector('.fee1');
    fee1.classList.add('dasActive');

    const attendance=document.querySelector('.attendance');
    attendance.classList.remove('dasActive');
    const attendance1=document.querySelector('.attendance1');
    attendance1.classList.remove('dasActive');

    const student=document.querySelector('.student');
    student.classList.remove('dasActive');
    const student1=document.querySelector('.student1');
    student1.classList.remove('dasActive');

    const teacher=document.querySelector('.teacher');
    teacher.classList.remove('dasActive');
    const teacher1=document.querySelector('.teacher1');
    teacher1.classList.remove('dasActive');

    const dashboard=document.querySelector('.dashboard');
    dashboard.classList.remove('dasActive');
    const dashboard1=document.querySelector('.dashboard1');
    dashboard1.classList.remove('dasActive');

    const notice=document.querySelector('.notice');
    notice.classList.remove('dasActive');
    const notice1=document.querySelector('.notice1');
    notice1.classList.remove('dasActive');
}

//=============================================================================

function toggleNotice(){
    const mainContaint1=document.querySelector('.mainContaint1');
    const mainContaint2=document.querySelector('.mainContaint2');
    const mainContaint3=document.querySelector('.mainContaint3');
    const mainContaint4=document.querySelector('.mainContaint4');
    const mainContaint5=document.querySelector('.mainContaint5');
    const mainContaint6=document.querySelector('.mainContaint6');

    mainContaint6.classList.remove('hidden');
    mainContaint5.classList.add('hidden');
    mainContaint4.classList.add('hidden');
    mainContaint1.classList.add('hidden');
    mainContaint2.classList.add('hidden');
    mainContaint3.classList.add('hidden');

    const notice=document.querySelector('.notice');
    notice.classList.add('dasActive');
    const notice1=document.querySelector('.notice1');
    notice1.classList.add('dasActive');

    const fee=document.querySelector('.fee');
    fee.classList.remove('dasActive');
    const fee1=document.querySelector('.fee1');
    fee1.classList.remove('dasActive');

    const attendance=document.querySelector('.attendance');
    attendance.classList.remove('dasActive');
    const attendance1=document.querySelector('.attendance1');
    attendance1.classList.remove('dasActive');

    const student=document.querySelector('.student');
    student.classList.remove('dasActive');
    const student1=document.querySelector('.student1');
    student1.classList.remove('dasActive');

    const teacher=document.querySelector('.teacher');
    teacher.classList.remove('dasActive');
    const teacher1=document.querySelector('.teacher1');
    teacher1.classList.remove('dasActive');

    const dashboard=document.querySelector('.dashboard');
    dashboard.classList.remove('dasActive');
    const dashboard1=document.querySelector('.dashboard1');
    dashboard1.classList.remove('dasActive');
}


//=============================================== NOTICE ========================

//========= First
document.getElementById("messageForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const message = document.getElementById("messageInput")?.value.trim();
    if (!message) return alert("Please enter a message.");

    // Save to localStorage
    localStorage.setItem("savedMessage", message);

    // Update boards
    updateNoticeBoards(message);

    alert("Your Notice Updated");
    this.reset();
});

function updateNoticeBoards(message) {
    const boardIds = ["noticeBoard1", "noticeBoard12", "noticeBoard123", "StuNoticeBoard1"];
    const containerClasses = [".cutNoticeDive1", ".cutNoticeDive2", ".cutNoticeDive3", ".StucutNoticeDive1"];

    boardIds.forEach(id => {
        const board = document.getElementById(id);
        if (board) board.textContent = message;
    });

    containerClasses.forEach(cls => {
        document.querySelector(cls)?.classList.remove('hidden');
    });
}

function hideNotice(cls) {
    document.querySelector(cls)?.classList.add('hidden');
}

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("savedMessage");
    if (saved) updateNoticeBoards(saved);

    const buttons = [
        { btn: '.cutNotice1', container: '.cutNoticeDive1' },
        { btn: '.cutNotice2', container: '.cutNoticeDive2' },
        { btn: '.cutNotice3', container: '.cutNoticeDive3' },
        { btn: '.StucutNotice1', container: '.StucutNoticeDive1' }
    ];

    buttons.forEach(({ btn, container }) => {
        document.querySelector(btn)?.addEventListener("click", () => hideNotice(container));
    });
});

//=========== Second

document.getElementById("messageForm2")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const message = document.getElementById("messageInput2")?.value.trim();
    if (!message) return alert("Please enter a message.");

    // Save to localStorage
    localStorage.setItem("savedMessage", message);

    // Update boards
    updateNoticeBoards(message);

    alert("Your Notice Updated");
    this.reset();
});

function updateNoticeBoards(message) {
    const boardIds = ["noticeBoard1", "noticeBoard12", "noticeBoard123", "StuNoticeBoard1"];
    const containerClasses = [".cutNoticeDive1", ".cutNoticeDive2", ".cutNoticeDive3", ".StucutNoticeDive1"];

    boardIds.forEach(id => {
        const board = document.getElementById(id);
        if (board) board.textContent = message;
    });

    containerClasses.forEach(cls => {
        document.querySelector(cls)?.classList.remove('hidden');
    });
}

function hideNotice(cls) {
    document.querySelector(cls)?.classList.add('hidden');
}

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("savedMessage");
    if (saved) updateNoticeBoards(saved);

    const buttons = [
        { btn: '.cutNotice1', container: '.cutNoticeDive1' },
        { btn: '.cutNotice2', container: '.cutNoticeDive2' },
        { btn: '.cutNotice3', container: '.cutNoticeDive3' },
        { btn: '.StucutNotice1', container: '.StucutNoticeDive1' }
    ];

    buttons.forEach(({ btn, container }) => {
        document.querySelector(btn)?.addEventListener("click", () => hideNotice(container));
    });
});



  //==================================================== Admin Login/SignUp ===========================
   
  //Register
  function registerUser() {
    const email = document.querySelector('.registerEmail')?.value.trim();
    const password = document.querySelector('.registerPasword')?.value;
    const name = document.querySelector('.registerUserName')?.value.trim();
    const registerUserImg = document.querySelector('.registerUserImg');
    const file = registerUserImg?.files[0];

    if (!email || !password || !name || !file) {
        alert("Please fill out all fields.");
        return;
    }

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("Email already registered.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const base64Img = e.target.result;

        // Create new user object
        const newUser = {
            email,
            password,
            name,
            image: base64Img
        };

        // Add new user to array and save
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert("Registration successful!");
        window.location.href = "./login.html";
    };

    reader.readAsDataURL(file);
}


function loginFun() {
    const userEmail = document.querySelector('.userEmail')?.value.trim();
    const userPassword = document.querySelector('.userPassword')?.value;

    if (!userEmail || !userPassword) {
        alert("Please enter both email and password.");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email and password match a registered user
    const registeredUser = users.find(u => u.email === userEmail && u.password === userPassword);

    // Hardcoded admin credentials
    const adminCredentials = {
        "umashankar1234@gmail.com": "Uma@1234",
        "raviranjankumarnd2003@gmail.com": "Ravi@1234"
    };

    // Case 1: If user is registered
    if (registeredUser) {
        alert("Login successful!");
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(registeredUser));
        setTimeout(() => {
            window.location.href = "./AdminDashboard.html";
        },0);
        return;
    }

    // Case 2: If hardcoded admin credentials match, check if also registered for image and name
    if (adminCredentials[userEmail] === userPassword) {
        // Try to fetch image and name from registered users
        const fromStorage = users.find(u => u.email === userEmail);

        const user = {
            email: userEmail,
            name: fromStorage ? fromStorage.name : (userEmail === "umashankar1234@gmail.com" ? "Umashankar" : "Raviranjan"),
            image: fromStorage ? fromStorage.image : "" // use blank or default image if not found
        };

        alert("Login successful!");
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));
        setTimeout(() => {
            window.location.href = "./AdminDashboard.html";
        },0);
        return;
    }

    // Case 3: Invalid
    alert("Invalid email or password.");
}

window.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const profileName = document.querySelector('.profileName');
    const profileName2 = document.querySelector('.profileName2');
    const exitLogin = document.querySelector('.exitLogin');
    const exitLogin2 = document.querySelector('.exitLogin2');
    const loginImg = document.querySelector('.loginImg');
    const loginImg2 = document.querySelector('.loginImg2');

    if (isLoggedIn === 'true' && currentUser) {
        if (profileName) profileName.textContent = currentUser.name;
        if (profileName2) profileName2.textContent = currentUser.name;

        if (exitLogin) exitLogin.innerHTML = "Logout";
        if (exitLogin2) exitLogin2.innerHTML = "Logout";

        if (loginImg) loginImg.innerHTML = `<img src="${currentUser.image}" alt="User Image" class="h-full w-full rounded-full" />`;
        if (loginImg2) loginImg2.innerHTML = `<img src="${currentUser.image}" alt="User Image" class="h-full w-full rounded-full" />`;

        if (exitLogin) {
            exitLogin.addEventListener("click", logoutUser);
        }
        if (exitLogin2) {
            exitLogin2.addEventListener("click", logoutUser);
        }
    }
});

function logoutUser() {
    // localStorage.clear();
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    window.location.href = "./login.html";
}




//================================================================= Teacher Login/Logout ================================


//Register
  function teacherregisterUser() {
    const email = document.querySelector('.tregisterEmail')?.value.trim();
    const password = document.querySelector('.tregisterPasword')?.value;
    const name = document.querySelector('.tregisterUserName')?.value.trim();
    const mobile = document.querySelector('.tregisterMobile')?.value.trim();
    const salary = document.querySelector('.tregisterSalary')?.value.trim();
    const registerUserImg = document.querySelector('.tregisterUserImg');
    const file = registerUserImg?.files[0];

    if (!email || !password || !name || !file || !salary) {
        alert("Please fill out all fields.");
        return;
    }

    const users2 = JSON.parse(localStorage.getItem('users2')) || [];
    const existingUser = users2.find(user => user.email === email);
    if (existingUser) {
        alert("Email already registered.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const base64Img = e.target.result;
        const newUser = { email, password, name, image: base64Img, mobile, salary };

        users2.push(newUser);
        localStorage.setItem('users2', JSON.stringify(users2));
        localStorage.setItem('trecentRegisteredUser', JSON.stringify(newUser));

        alert("Registration successful!");
        setTimeout(() => window.location.href = "./TeacherLogin.html", 0);
    };

    reader.readAsDataURL(file);
}


// Login Function
function teacherloginFun() {
    const userEmail = document.querySelector('.tuserEmail')?.value.trim().toLowerCase();
    const userPassword = document.querySelector('.tuserPassword')?.value;

    if (!userEmail || !userPassword) {
        alert("❗ Please enter both email and password.");
        return;
    }

    const approvedUsers = JSON.parse(localStorage.getItem('approvedUsers')) || [];

    const user = approvedUsers.find(u =>
        u.email?.toLowerCase() === userEmail && u.password === userPassword
    );

    if (user) {
        alert("✅ Login successful!");
        localStorage.setItem('isLoggedInTeach', 'true');
        localStorage.setItem('currentUserTech', JSON.stringify(user));
        setTimeout(() => window.location.href = "./TeacherDashboard.html", 0);
    } else {
        alert("❌ Invalid email or password.");
    }
}


window.addEventListener('DOMContentLoaded', () => {

    const recentUser = JSON.parse(localStorage.getItem('trecentRegisteredUser'));

    const adPart1 = document.querySelector('.Adpart1');
    const adPart2 = document.querySelector('.Adpart2');

    if (recentUser && adPart1 && adPart2) {
        adPart1.innerHTML = `
            <h1 class="text-4xl helloTeacherMob font-semibold">Hello, ${recentUser.name}</h1>
            <p class="mt-3">Your Account is Not Approved Till Now</p>
            <p class="mt-3">Our Team Is Checking Your Profile</p>
            <p class="mt-3">Soon You Will Be Hired To Our Insitute</p>
        `;
        adPart2.innerHTML = `
           <div>
              <a href="#" class="exitLoginCheckt p-2 border-1 hover:border-2 hover:border-gray-300 text-[#000] rounded-md transform transition duration-300 hover:scale-110">Check Later</a>
              <a href="./SLogin.html" class="p-2 bg-[blue] text-[#fff] rounded-md ml-5">Login</a>
            </div>
        `;

        const exitLoginCheckt = document.querySelector('.exitLoginCheckt');
        if (exitLoginCheckt) {
            exitLoginCheckt.addEventListener("click", function (e) {
            e.preventDefault();
            logoutUserTech();
       });
    }


        localStorage.removeItem('trecentRegisteredUser');
    }

       const isLoggedInTeach = localStorage.getItem('isLoggedInTeach');
       const currentUserTech = JSON.parse(localStorage.getItem('currentUserTech'));
       const teacherProfileName = document.querySelector('.teacherProfileName');
       const teacherProfileName2 = document.querySelector('.teacherProfileName2');
       const teacherProfileName3 = document.querySelector('.teacherProfileName3');
       const teacherexitLogin = document.querySelector('.teacherexitLogin');
       const teacherexitLogin2 = document.querySelector('.teacherexitLogin2');
       const exitLoginCheckt= document.querySelector('.exitLoginCheckt');
       const teacherloginImg = document.querySelector('.teacherloginImg');
       const teacherloginImg2 = document.querySelector('.teacherloginImg2');

    if (isLoggedInTeach === 'true' && currentUserTech) {
        if (teacherProfileName) teacherProfileName.textContent = currentUserTech.name;
        if (teacherProfileName2) teacherProfileName2.textContent = currentUserTech.name;
        if (teacherProfileName3) teacherProfileName3.textContent = currentUserTech.name;

        if (document.querySelector('.teacherProfileName')) document.querySelector('.teacherProfileName').textContent = currentUserTech.name;
        if (document.querySelector('.teacherProfileName2')) document.querySelector('.teacherProfileName2').textContent = currentUserTech.name;
        if (document.querySelector('.teacherProfileName3')) document.querySelector('.teacherProfileName3').textContent = currentUserTech.name;

        if (document.querySelector('.teacherProfileName3')) document.querySelector('.teacherProfileName3').textContent = currentUserTech.name;
        if (document.querySelector('.teacherMobile')) document.querySelector('.teacherMobile').textContent = currentUserTech.mobile || 'N/A';
        if (document.querySelector('.teacherJoiningDate')) document.querySelector('.teacherJoiningDate').textContent = currentUserTech.roll || 'N/A';
        if (document.querySelector('.teacherSal')) document.querySelector('.teacherSal').textContent = currentUserTech.salary || '0';
        if(document.querySelector('.teacherJoiningDate')) document.querySelector('.teacherJoiningDate').textContent=currentUserTech.date || 'N/A';

        if (teacherloginImg) teacherloginImg.innerHTML = `<img src="${currentUserTech.image}" alt="User Image" class="h-full w-full rounded-full" />`;
        if (teacherloginImg2) teacherloginImg2.innerHTML = `<img src="${currentUserTech.image}" alt="User Image" class="h-full w-full rounded-full" />`;

        if (teacherexitLogin) {
            teacherexitLogin.addEventListener("click", logoutUserTech);
        }
        if (teacherexitLogin2) {
            teacherexitLogin2.addEventListener("click", logoutUserTech);
        }
        if(exitLoginCheckt){
            exitLoginCheckt.addEventListener("click", logoutUserTech);
        }
    }

});

function logoutUserTech() {
    localStorage.removeItem('isLoggedInTeach');
    localStorage.removeItem('currentUserTech');
    window.location.href = "./TeacherLogin.html";
}




//================================================================= Student Login/Logout ================================


//Register
function studentregisterUser() {
    const email = document.querySelector('.sregisterEmail')?.value.trim().toLowerCase();
    const password = document.querySelector('.sregisterPasword')?.value;
    const name = document.querySelector('.sregisterUserName')?.value.trim();
    const registerUserImg = document.querySelector('.sregisterUserImg');
    const mobile = document.querySelector('.sregisterMobile')?.value.trim();
    const fee = document.querySelector('.sregisterFee')?.value.trim();
    const batch = document.querySelector('.sregisterBatch')?.value.trim().toLowerCase();
    const roll=document.querySelector('.sregisterRoll')?.value.trim();
    const file = registerUserImg?.files[0];

    if (!email || !password || !name || !mobile || !fee || !file || !batch || !roll) {
        alert("Please fill out all fields.");
        return;
    }

    const users3 = JSON.parse(localStorage.getItem('users3')) || [];
    const existingUser = users3.find(user => user.email === email);
    if (existingUser) {
        alert("Email already registered.");
        return;
    }
    const approvedUsers2 = JSON.parse(localStorage.getItem('approvedUsers2')) || [];

    const duplicateRoll = [...users3, ...approvedUsers2].find(
        user => user.batch === batch && user.roll === roll
    );

    // const duplicateRoll = users3.find(user => user.batch === batch && user.roll === roll);
    if (duplicateRoll) {
        alert(`Roll number "${roll}" is already taken in batch "${batch}".`);
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const base64Img = e.target.result;

        const newUser = {
            email,
            password,
            name,
            image: base64Img,
            mobile,
            fee,
            batch: batch.toLowerCase(),
            roll
        };

        users3.push(newUser);
        localStorage.setItem('users3', JSON.stringify(users3));

        localStorage.setItem('recentRegisteredUser2', JSON.stringify(newUser));
        alert("Registration successful!");

        setTimeout(() => {
            window.location.href = "./StudentLogin.html";
        }, 1000);
    };

    reader.readAsDataURL(file);
}


// Login Student
function studentloginFun() {
    const userEmail = document.querySelector('.suserEmail')?.value.trim().toLowerCase();
    const userPassword = document.querySelector('.suserPassword')?.value;

    if (!userEmail || !userPassword) {
        alert("Please enter both email and password.");
        return;
    }

    const approvedUsers2 = JSON.parse(localStorage.getItem('approvedUsers2')) || [];

   
       const user = approvedUsers2.find(
          u => u.email && u.password && 
          u.email.toLowerCase() === userEmail && 
          u.password === userPassword
       );


    if (user) {
        alert("Login successful!");
        localStorage.setItem('isLoggedInStu', 'true');
        localStorage.setItem('currentUserStu', JSON.stringify(user));

        setTimeout(() => {
            window.location.href = "./StudentDashboard.html";
        },0);
    } else {
        alert("Invalid email or password, or your account is not yet approved.");
    }
}



// Handle DOM on Page Load
window.addEventListener('DOMContentLoaded', () => {
    const recentUser2 = JSON.parse(localStorage.getItem('recentRegisteredUser2'));
    const studentAdpart1 = document.querySelector('.studentAdpart1');
    const studentAdpart2 = document.querySelector('.studentAdpart2');

    if (recentUser2 && studentAdpart1 && studentAdpart2) {
    studentAdpart1.innerHTML = `
        <h1 class="text-4xl font-semibold">Hello, ${recentUser2.name}</h1>
        <p class="mt-3">Your Account is Not Approved Till Now</p>
        <p class="mt-3">Our Team Is Checking Your Profile</p>
        <p class="mt-3">Soon Your Admission Will Confirmed!!</p>
    `;
    studentAdpart2.innerHTML = `
        <div>
            <a href="#" class="exitLoginCheck p-2 border-1 hover:border-2 hover:border-gray-300 text-[#000] rounded-md transform transition duration-300 hover:scale-110">Check Later</a>
            <a href="./SLogin.html" class="p-2 bg-[blue] text-[#fff] rounded-md ml-5">Login</a>
        </div>
    `;
    

    // Now select the dynamically inserted logout button
    const exitLoginCheck = document.querySelector('.exitLoginCheck');
    if (exitLoginCheck) {
        exitLoginCheck.addEventListener("click", logoutStu);
    }

    localStorage.removeItem('recentRegisteredUser2');
}


    const isLoggedInStu = localStorage.getItem('isLoggedInStu');
    const currentUserStu = JSON.parse(localStorage.getItem('currentUserStu'));

    const StuProfileName = document.querySelector('.StuProfileName');
    const StuProfileName2 = document.querySelector('.StuProfileName2');
    const StuProfileName3 = document.querySelector('.StuProfileName3');
    const stuexitLogin = document.querySelector('.stuexitLogin');
    const stuexitLogin2 = document.querySelector('.stuexitLogin2');
    const exitLoginCheck=document.querySelector('.exitLoginCheck');
    const StuloginImg = document.querySelector('.StuloginImg');
    const StuloginImg2 = document.querySelector('.StuloginImg2');

    if (isLoggedInStu === 'true' && currentUserStu) {
        if (StuProfileName) StuProfileName.textContent = currentUserStu.name;
        if (StuProfileName2) StuProfileName2.textContent = currentUserStu.name;

        if (document.querySelector('.StuProfileName')) document.querySelector('.StuProfileName').textContent = currentUserStu.name;
        if (document.querySelector('.StuProfileName2')) document.querySelector('.StuProfileName2').textContent = currentUserStu.name;
        if (document.querySelector('.StuProfileName3')) document.querySelector('.StuProfileName3').textContent = currentUserStu.name;

        if (document.querySelector('.StuprofileName3')) document.querySelector('.StuprofileName3').textContent = currentUserStu.name;
        if (document.querySelector('.StuMobile')) document.querySelector('.StuMobile').textContent = currentUserStu.mobile || 'N/A';
        if (document.querySelector('.StuRoll')) document.querySelector('.StuRoll').textContent = currentUserStu.roll || 'N/A';
        if (document.querySelector('.StuFee')) document.querySelector('.StuFee').textContent = currentUserStu.fee || '0';

        if (StuloginImg) StuloginImg.innerHTML = `<img src="${currentUserStu.image}" alt="User Image" class="h-full w-full rounded-full" />`;
        if (StuloginImg2) StuloginImg2.innerHTML = `<img src="${currentUserStu.image}" alt="User Image" class="h-full w-full rounded-full" />`;

        if (stuexitLogin) stuexitLogin.addEventListener("click", logoutStu);
        if (stuexitLogin2) stuexitLogin2.addEventListener("click", logoutStu);
        if(exitLoginCheck) exitLoginCheck.addEventListener("click", logoutStu);
    }
});

// Logout Function
function logoutStu() {
    localStorage.removeItem('isLoggedInStu');
    localStorage.removeItem('currentUserStu');
    window.location.href = "./StudentLogin.html";
}






//================================================================ ATTENDANCE =====================================

function toggleShowBatch1(){
    const viewAttendance=document.querySelector('.viewAttendance');
    const batch1=document.querySelector('.batch1');

    const viewAttendanceBatch1=document.querySelector('.viewAttendanceBatch1');
    viewAttendanceBatch1.classList.add('hidden');

    const attendanceCut=document.querySelector('.attendanceCut');
    attendanceCut.classList.remove('hidden');

    batch1.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    
}
function toggleShowBatch2(){
    const viewAttendance=document.querySelector('.viewAttendance');
    const batch2=document.querySelector('.batch2');

    const attendanceCut=document.querySelector('.attendanceCut');
    attendanceCut.classList.remove('hidden');

    const viewAttendanceBatch1=document.querySelector('.viewAttendanceBatch1');
    viewAttendanceBatch1.classList.add('hidden');

    batch2.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    
}
function toggleShowBatch3(){
    const viewAttendance=document.querySelector('.viewAttendance');
    const batch3=document.querySelector('.batch3');

    const attendanceCut=document.querySelector('.attendanceCut');
    attendanceCut.classList.remove('hidden');

    const viewAttendanceBatch1=document.querySelector('.viewAttendanceBatch1');
    viewAttendanceBatch1.classList.add('hidden');

    batch3.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    
}
function toggleShowBatch4(){
    const viewAttendance=document.querySelector('.viewAttendance');
    const batch4=document.querySelector('.batch4');

    const attendanceCut=document.querySelector('.attendanceCut');
    attendanceCut.classList.remove('hidden');
    const viewAttendanceBatch1=document.querySelector('.viewAttendanceBatch1');
    viewAttendanceBatch1.classList.add('hidden');

    batch4.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    
}
function toggleShowBatch5(){
    const viewAttendance=document.querySelector('.viewAttendance');
    const batch5=document.querySelector('.batch5');

    const attendanceCut=document.querySelector('.attendanceCut');
    attendanceCut.classList.remove('hidden');
    const viewAttendanceBatch1=document.querySelector('.viewAttendanceBatch1');
    viewAttendanceBatch1.classList.add('hidden');

    batch5.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    
}
function toggleShowBatch6(){
    const viewAttendance=document.querySelector('.viewAttendance');
    const batch6=document.querySelector('.batch6');

    const attendanceCut=document.querySelector('.attendanceCut');
    attendanceCut.classList.remove('hidden');
    const viewAttendanceBatch1=document.querySelector('.viewAttendanceBatch1');
    viewAttendanceBatch1.classList.add('hidden');

    batch6.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    
}
function toggleShowBatch7(){
    const viewAttendance=document.querySelector('.viewAttendance');
    const batch7=document.querySelector('.batch7');

    const attendanceCut=document.querySelector('.attendanceCut');
    attendanceCut.classList.remove('hidden');
    const viewAttendanceBatch1=document.querySelector('.viewAttendanceBatch1');
    viewAttendanceBatch1.classList.add('hidden');

    batch7.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    
}
function toggleShowBatch8(){
    const viewAttendance=document.querySelector('.viewAttendance');
    const batch8=document.querySelector('.batch8');

    const attendanceCut=document.querySelector('.attendanceCut');
    attendanceCut.classList.remove('hidden');
    const viewAttendanceBatch1=document.querySelector('.viewAttendanceBatch1');
    viewAttendanceBatch1.classList.add('hidden');

    batch8.classList.remove('hidden');

    viewAttendance.classList.add('hidden');
    
}
function toggleShowBatch9(){
    const viewAttendance=document.querySelector('.viewAttendance');
    const batch9=document.querySelector('.batch9');
   

    const attendanceCut=document.querySelector('.attendanceCut');
    attendanceCut.classList.remove('hidden');
    const viewAttendanceBatch1=document.querySelector('.viewAttendanceBatch1');
    viewAttendanceBatch1.classList.add('hidden');

    batch9.classList.remove('hidden');

    viewAttendance.classList.add('hidden');
    
}
function toggleShowBatch10(){
    const viewAttendance=document.querySelector('.viewAttendance');
    const batch10=document.querySelector('.batch10');

    const attendanceCut=document.querySelector('.attendanceCut');
    attendanceCut.classList.remove('hidden');
    const viewAttendanceBatch1=document.querySelector('.viewAttendanceBatch1');
    viewAttendanceBatch1.classList.add('hidden');

    batch10.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    
}
document.querySelector('.attendanceCut').addEventListener('click', (e) => {
    const viewAttendance = document.querySelector('.viewAttendance');
    const at=document.querySelector('.at');
    const batches = [
        '.batch1', '.batch2', '.batch3', '.batch4', '.batch5',
        '.batch6', '.batch7', '.batch8', '.batch9', '.batch10','.attendanceCut','.dateAttentance','.viewAttendanceBatch1',
        '.viewAttendanceBatch2','.viewAttendanceBatch3','.viewAttendanceBatch4','.viewAttendanceBatch5','.viewAttendanceBatch6',
        '.viewAttendanceBatch7','.viewAttendanceBatch8','.viewAttendanceBatch9','.viewAttendanceBatch10'
    ];

    batches.forEach(batchSelector => {
        const batch = document.querySelector(batchSelector);
        if (batch) batch.classList.add('hidden');
    });

    if (viewAttendance) viewAttendance.classList.remove('hidden');
    if (at) at.classList.remove('hidden');
});

//=================== View Attentance

function toggleShowAttendanceBatch1(){
    const viewAttendanceBatch1=document.querySelector('.viewAttendanceBatch1');
    const viewAttendance=document.querySelector('.viewAttendance');
    const attendanceCut=document.querySelector('.attendanceCut');
    const dateAttentance=document.querySelector('.dateAttentance');
    const at=document.querySelector('.at');

    viewAttendanceBatch1.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    attendanceCut.classList.remove('hidden');
    dateAttentance.classList.remove('hidden');
    at.classList.add('hidden');
}
function toggleShowAttendanceBatch2(){
    const viewAttendanceBatch2=document.querySelector('.viewAttendanceBatch2');
    const viewAttendance=document.querySelector('.viewAttendance');
    const attendanceCut=document.querySelector('.attendanceCut');
    const dateAttentance=document.querySelector('.dateAttentance');
    const switchBatch=document.querySelector('.switchBatch');
    const at=document.querySelector('.at');

    switchBatch.textContent="K2";

    viewAttendanceBatch2.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    attendanceCut.classList.remove('hidden');
    dateAttentance.classList.remove('hidden');
    at.classList.add('hidden');
}
function toggleShowAttendanceBatch3(){
    const viewAttendanceBatch3=document.querySelector('.viewAttendanceBatch3');
    const viewAttendance=document.querySelector('.viewAttendance');
    const attendanceCut=document.querySelector('.attendanceCut');
    const dateAttentance=document.querySelector('.dateAttentance');
    const switchBatch=document.querySelector('.switchBatch');
    const at=document.querySelector('.at');

    switchBatch.textContent="K3";

    viewAttendanceBatch3.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    attendanceCut.classList.remove('hidden');
    dateAttentance.classList.remove('hidden');
    at.classList.add('hidden');
}
function toggleShowAttendanceBatch4(){
    const viewAttendanceBatch4=document.querySelector('.viewAttendanceBatch4');
    const viewAttendance=document.querySelector('.viewAttendance');
    const attendanceCut=document.querySelector('.attendanceCut');
    const dateAttentance=document.querySelector('.dateAttentance');
    const switchBatch=document.querySelector('.switchBatch');
    const at=document.querySelector('.at');

    switchBatch.textContent="K4";

    viewAttendanceBatch4.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    attendanceCut.classList.remove('hidden');
    dateAttentance.classList.remove('hidden');
    at.classList.add('hidden');
}
function toggleShowAttendanceBatch5(){
    const viewAttendanceBatch5=document.querySelector('.viewAttendanceBatch5');
    const viewAttendance=document.querySelector('.viewAttendance');
    const attendanceCut=document.querySelector('.attendanceCut');
    const dateAttentance=document.querySelector('.dateAttentance');
    const switchBatch=document.querySelector('.switchBatch');
    const at=document.querySelector('.at');

    switchBatch.textContent="K5";

    viewAttendanceBatch5.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    attendanceCut.classList.remove('hidden');
    dateAttentance.classList.remove('hidden');
    at.classList.add('hidden');
}
function toggleShowAttendanceBatch6(){
    const viewAttendanceBatch6=document.querySelector('.viewAttendanceBatch6');
    const viewAttendance=document.querySelector('.viewAttendance');
    const attendanceCut=document.querySelector('.attendanceCut');
    const dateAttentance=document.querySelector('.dateAttentance');
    const switchBatch=document.querySelector('.switchBatch');
    const at=document.querySelector('.at');

    switchBatch.textContent="K6";

    viewAttendanceBatch6.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    attendanceCut.classList.remove('hidden');
    dateAttentance.classList.remove('hidden');
    at.classList.add('hidden');
}
function toggleShowAttendanceBatch7(){
    const viewAttendanceBatch7=document.querySelector('.viewAttendanceBatch7');
    const viewAttendance=document.querySelector('.viewAttendance');
    const attendanceCut=document.querySelector('.attendanceCut');
    const dateAttentance=document.querySelector('.dateAttentance');
    const switchBatch=document.querySelector('.switchBatch');
    const at=document.querySelector('.at');

    switchBatch.textContent="K7";

    viewAttendanceBatch7.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    attendanceCut.classList.remove('hidden');
    dateAttentance.classList.remove('hidden');
    at.classList.add('hidden');
}
function toggleShowAttendanceBatch8(){
    const viewAttendanceBatch8=document.querySelector('.viewAttendanceBatch8');
    const viewAttendance=document.querySelector('.viewAttendance');
    const attendanceCut=document.querySelector('.attendanceCut');
    const dateAttentance=document.querySelector('.dateAttentance');
    const switchBatch=document.querySelector('.switchBatch');
    const at=document.querySelector('.at');

    switchBatch.textContent="K8";

    viewAttendanceBatch8.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    attendanceCut.classList.remove('hidden');
    dateAttentance.classList.remove('hidden');
    at.classList.add('hidden');
}
function toggleShowAttendanceBatch9(){
    const viewAttendanceBatch9=document.querySelector('.viewAttendanceBatch9');
    const viewAttendance=document.querySelector('.viewAttendance');
    const attendanceCut=document.querySelector('.attendanceCut');
    const dateAttentance=document.querySelector('.dateAttentance');
    const switchBatch=document.querySelector('.switchBatch');
    const at=document.querySelector('.at');

    switchBatch.textContent="K9";

    viewAttendanceBatch9.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    attendanceCut.classList.remove('hidden');
    dateAttentance.classList.remove('hidden');
    at.classList.add('hidden');
}
function toggleShowAttendanceBatch10(){
    const viewAttendanceBatch10=document.querySelector('.viewAttendanceBatch10');
    const viewAttendance=document.querySelector('.viewAttendance');
    const attendanceCut=document.querySelector('.attendanceCut');
    const dateAttentance=document.querySelector('.dateAttentance');
    const switchBatch=document.querySelector('.switchBatch');
    const at=document.querySelector('.at');

    switchBatch.textContent="K10";

    viewAttendanceBatch10.classList.remove('hidden');
    viewAttendance.classList.add('hidden');
    attendanceCut.classList.remove('hidden');
    dateAttentance.classList.remove('hidden');
    at.classList.add('hidden');
}

