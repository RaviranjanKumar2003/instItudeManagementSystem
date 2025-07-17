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

document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const message = document.getElementById("messageInput").value;
    
    // Save to localStorage
    localStorage.setItem("savedMessage", message);
    
    // Update all notice boards
    updateNoticeBoards(message);

    alert("Your Notice Updeted");
    this.reset();
  });

  // Function to update all 3 boards
  function updateNoticeBoards(message) {
    document.getElementById("noticeBoard1").textContent = message;
    document.getElementById("noticeBoard12").textContent = message;
    document.getElementById("noticeBoard123").textContent = message;
    document.querySelector('.cutNoticeDive1').classList.remove('hidden');
    document.querySelector('.cutNoticeDive2').classList.remove('hidden');
    document.querySelector('.cutNoticeDive3').classList.remove('hidden');
  }

  function hideNoticeDive1() {
    document.querySelector('.cutNoticeDive1').classList.add('hidden');
}
function hideNoticeDive2() {
    document.querySelector('.cutNoticeDive2').classList.add('hidden');
}
function hideNoticeDive3() {
    document.querySelector('.cutNoticeDive3').classList.add('hidden');
}


  // On page load, show saved message
  window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("savedMessage");
    if (saved) {
      updateNoticeBoards(saved);
    }

     document.querySelector('.cutNotice1').addEventListener("click", hideNoticeDive1);
     document.querySelector('.cutNotice2').addEventListener("click", hideNoticeDive2);
     document.querySelector('.cutNotice3').addEventListener("click", hideNoticeDive3);
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


// Login Function
function loginFun() {
    const userEmail = document.querySelector('.userEmail')?.value.trim();
    const userPassword = document.querySelector('.userPassword')?.value;

    if (!userEmail || !userPassword) {
        alert("Please enter both email and password.");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === userEmail && u.password === userPassword);

    if (user) {
        alert("Login successful!");

        // Save current logged-in user
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));

        setTimeout(() => {
            window.location.href = "./AdminDashboard.html";
        }, 1000);
    } else {
        alert("Invalid email or password.");
    }
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
    const registerUserImg = document.querySelector('.tregisterUserImg');
    const mobile = document.querySelector('.tregisterMobile')?.value.trim();
    const salary = document.querySelector('.tregisterSalary')?.value.trim();
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

        const newUser = {
            email,
            password,
            name,
            image: base64Img,
            mobile,
            salary
        };

        users2.push(newUser);
        localStorage.setItem('users2', JSON.stringify(users2));

        //  Store recent user separately
        localStorage.setItem('trecentRegisteredUser', JSON.stringify(newUser));

        alert("Registration successful!");

        //  Delay so user sees alert
        setTimeout(() => {
            window.location.href = "./TeacherLogin.html";
        }, 1000);
    };

    reader.readAsDataURL(file);
}


// Login Function
function teacherloginFun() {
    const userEmail = document.querySelector('.tuserEmail')?.value.trim();
    const userPassword = document.querySelector('.tuserPassword')?.value;

    if (!userEmail || !userPassword) {
        alert("Please enter both email and password.");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === userEmail && u.password === userPassword);

    if (user) {
        alert("Login successful!");

        // Save current logged-in user
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));

        setTimeout(() => {
            window.location.href = "#";
        }, 1000);
    } else {
        alert("Invalid email or password.");
    }
}
window.addEventListener('DOMContentLoaded', () => {

    const recentUser = JSON.parse(localStorage.getItem('recentRegisteredUser'));
    const adPart1 = document.querySelector('.Adpart1');
    const adPart2 = document.querySelector('.Adpart2');

    if (recentUser && adPart1 && adPart2) {
        adPart1.innerHTML = `
            <h1 class="text-4xl font-semibold">Hello, ${recentUser.name}</h1>
            <p class="mt-3">Your Account is Not Approved Till Now</p>
            <p class="mt-3">Our Team Is Checking Your Profile</p>
            <p class="mt-3">Soon You Will Be Hired To Our Insitute</p>
        `;
        adPart2.innerHTML=`
        <div class="">
            <a href="#" class="p-2 border text-[#000] rounded-md ml-5">Check Later</a>
            <a href="#" class="exitLogin2 p-2 bg-[blue] text-[#fff] rounded-md transform transition duration-300 hover:scale-110">Logout For Now</a>
        </div>
        
        `;

        localStorage.removeItem('recentRegisteredUser');
    }

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
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    window.location.href = "./login.html";
}




//================================================================= Student Login/Logout ================================


//Register
function studentregisterUser() {
    const email = document.querySelector('.sregisterEmail')?.value.trim();
    const password = document.querySelector('.sregisterPasword')?.value;
    const name = document.querySelector('.sregisterUserName')?.value.trim();
    const registerUserImg = document.querySelector('.sregisterUserImg');
    const mobile = document.querySelector('.sregisterMobile')?.value.trim();
    const fee = document.querySelector('.sregisterFee')?.value.trim();
    const batch = document.querySelector('.sregisterBatch')?.value.trim();
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
            batch,
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
    const userEmail = document.querySelector('.suserEmail')?.value.trim();
    const userPassword = document.querySelector('.suserPassword')?.value;

    if (!userEmail || !userPassword) {
        alert("Please enter both email and password.");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users3')) || [];
    const user = users.find(u => u.email === userEmail && u.password === userPassword);

    if (user) {
        alert("Login successful!");
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));

        setTimeout(() => {
            window.location.href = "./StudentDashboard.html";
        }, 1000);
    } else {
        alert("Invalid email or password.");
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
            <p class="mt-3">Soon You Will Be Hired To Our Institute</p>
        `;
        studentAdpart2.innerHTML = `
            <div>
                <a href="#" class="p-2 border text-[#000] rounded-md ml-5">Check Later</a>
                <a href="#" class="exitLogin2 p-2 bg-[blue] text-[#fff] rounded-md transform transition duration-300 hover:scale-110">Logout For Now</a>
            </div>
        `;

        localStorage.removeItem('recentRegisteredUser2');
    }

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

        if (exitLogin) exitLogin.textContent = "Logout";
        if (exitLogin2) exitLogin2.textContent = "Logout";

        if (loginImg) loginImg.innerHTML = `<img src="${currentUser.image}" alt="User Image" class="h-full w-full rounded-full" />`;
        if (loginImg2) loginImg2.innerHTML = `<img src="${currentUser.image}" alt="User Image" class="h-full w-full rounded-full" />`;

        if (exitLogin) exitLogin.addEventListener("click", logoutUser);
        if (exitLogin2) exitLogin2.addEventListener("click", logoutUser);
    }
});

// Logout Function
function logoutUser() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    window.location.href = "./StudentLogin.html";
}

