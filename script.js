document.addEventListener("DOMContentLoaded", function () {

    // STATE ROLE
    let currentUserRole = null; // 'admin' atau 'user'

    // DEFAULT DATA WALI KELAS
    const defaultWaliKelas = {
        id: "wali-1",
        kategori: "wali",
        nama: "Yulius Kinta Kanisia, S. Kom.",
        jabatan: "Wali Kelas",
        foto: "https://via.placeholder.com/150?text=Wali+Kelas"
    };

    // DEFAULT DATA SISWA & PENGURUS
    const defaultSiswaList = [
        { id: "1", kategori: "pengurus", nama: "Angelia Jessamy Clarissa", jabatan: "Ketua Kelas", foto: "https://via.placeholder.com/150?text=Angelia" },
        { id: "2", kategori: "pengurus", nama: "Arkan Najwan Sefandy", jabatan: "Sekretaris 1", foto: "https://via.placeholder.com/150?text=Arkan" },
        { id: "3", kategori: "pengurus", nama: "Benediktus A.G.G Jakky Setiawan", jabatan: "Bendahara 1", foto: "https://via.placeholder.com/150?text=Benediktus" },
        { id: "4", kategori: "pengurus", nama: "Brandon Richie Susanto", jabatan: "Sekretaris 2", foto: "https://via.placeholder.com/150?text=Brandon" },
        { id: "5", kategori: "pengurus", nama: "Christiano Andrew Rafael Sitepu", jabatan: "Bendahara 2", foto: "https://via.placeholder.com/150?text=Christiano" },
        { id: "6", kategori: "siswa", nama: "Darriant Agusty Nymmotius", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Darriant" },
        { id: "7", kategori: "siswa", nama: "Dexter Kesuma Mutiara", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Dexter" },
        { id: "8", kategori: "siswa", nama: "Faras Petra Mulya", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Faras" },
        { id: "9", kategori: "siswa", nama: "Giovanni Prada Putra Nugroho", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Giovanni" },
        { id: "10", kategori: "siswa", nama: "Goudentius Reymen Jatiprayoga", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Goudentius" },
        { id: "11", kategori: "siswa", nama: "Jagad Rais Yafi Azraqi", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Jagad" },
        { id: "12", kategori: "siswa", nama: "Kelvin Firdaus Kennedy", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Kelvin" },
        { id: "13", kategori: "siswa", nama: "Kenzie Saverio Subroto", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Kenzie" },
        { id: "14", kategori: "siswa", nama: "Louis Devara Indrasta", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Louis" },
        { id: "15", kategori: "siswa", nama: "Marxio Amadeus Wijayanto", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Marxio" },
        { id: "16", kategori: "siswa", nama: "Nadia Sekar Arum Sarwono Putri", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Nadia" },
        { id: "17", kategori: "siswa", nama: "Nathanael Arya Widi Nugraha", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Nathanael" },
        { id: "18", kategori: "siswa", nama: "Prakasa Nanda Hrsikesa", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Prakasa" },
        { id: "19", kategori: "siswa", nama: "Rafa Aditya", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Rafa" },
        { id: "20", kategori: "siswa", nama: "Rifqy Alief Ramadhan", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Rifqy" },
        { id: "21", kategori: "siswa", nama: "Rizky Putra Al Akbar", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Rizky" },
        { id: "22", kategori: "siswa", nama: "Sebastian Josias Nugraha", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Sebastian" },
        { id: "23", kategori: "siswa", nama: "Sebastianus Philips Bagaskara", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Sebastianus" },
        { id: "24", kategori: "siswa", nama: "Valentino Fausta Huarang Agung", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Valentino" },
        { id: "25", kategori: "siswa", nama: "Wihelmus Jeckoniah Hawang Bugis", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Wihelmus" },
        { id: "26", kategori: "siswa", nama: "Yovan Paradise Juliant Reymondo", jabatan: "Siswa", foto: "https://via.placeholder.com/150?text=Yovan" }
    ];

    // DEFAULT DATA GALERI
    const defaultGallery = [
        { id: "1", tipe: "image", src: "https://via.placeholder.com/400x250?text=Foto+Dinamika+Sekolah", judul: "Hari 1: Dinamika Kebersamaan Kelas di Sekolah" },
        { id: "2", tipe: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", judul: "Hari 1: Dokumentasi Sesi Refleksi & Kebersamaan" },
        { id: "3", tipe: "image", src: "https://via.placeholder.com/400x250?text=Kerja+Bakti+Panti+Jompo", judul: "Hari 2: Kerja Bakti Lingkungan Panti Jompo" }
    ];

    // LOCAL STORAGE RETRIEVAL
    let waliKelas = JSON.parse(localStorage.getItem("class_wali")) || defaultWaliKelas;
    let siswaList = JSON.parse(localStorage.getItem("class_siswa")) || defaultSiswaList;
    let galleryList = JSON.parse(localStorage.getItem("class_gallery")) || defaultGallery;

    function saveMembersToStorage() {
        localStorage.setItem("class_wali", JSON.stringify(waliKelas));
        localStorage.setItem("class_siswa", JSON.stringify(siswaList));
    }

    function saveGalleryToStorage() {
        localStorage.setItem("class_gallery", JSON.stringify(galleryList));
    }

    const kegiatanList = [
        { judul: "Persiapan & Packing Sarasehan", tanggal: "1 Minggu Sebelum Acara", ket: "Pengecekan perlengkapan pribadi, sembako panti jompo, dan peralatan kelas." },
        { judul: "Evaluasi & Refleksi Post-Sarasehan", tanggal: "H+2 Setelah Acara", ket: "Diskusi kesan-pesan dan penyusunan laporan kegiatan kebersamaan." }
    ];

    function convertFileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
        });
    }

    // AUTH SWITCH & NAVIGATION
    const authScreen = document.getElementById("auth-screen");
    const mainApp = document.getElementById("main-app");
    const btnRoleUser = document.getElementById("btn-role-user");
    const btnRoleAdmin = document.getElementById("btn-role-admin");
    const formUserLogin = document.getElementById("form-user-login");
    const formAdminLogin = document.getElementById("form-admin-login");
    const adminLoginError = document.getElementById("admin-login-error");
    const userStatusBadge = document.getElementById("user-status-badge");
    const btnLogoutApp = document.getElementById("btn-logout-app");
    const adminOnlyButtons = document.querySelectorAll(".admin-only");

    btnRoleUser.addEventListener("click", () => {
        btnRoleUser.classList.add("active");
        btnRoleAdmin.classList.remove("active");
        formUserLogin.classList.remove("hidden");
        formAdminLogin.classList.add("hidden");
    });

    btnRoleAdmin.addEventListener("click", () => {
        btnRoleAdmin.classList.add("active");
        btnRoleUser.classList.remove("active");
        formAdminLogin.classList.remove("hidden");
        formUserLogin.classList.add("hidden");
    });

    formUserLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        currentUserRole = "user";
        enterApp();
    });

    formAdminLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        const u = document.getElementById("admin-username").value;
        const p = document.getElementById("admin-password").value;

        if (u === "admin" && p === "admin123") {
            currentUserRole = "admin";
            adminLoginError.classList.add("hidden");
            enterApp();
        } else {
            adminLoginError.classList.remove("hidden");
        }
    });

    btnLogoutApp.addEventListener("click", () => {
        currentUserRole = null;
        mainApp.classList.add("hidden");
        authScreen.classList.remove("hidden");
        formAdminLogin.reset();
    });

    function enterApp() {
        authScreen.classList.add("hidden");
        mainApp.classList.remove("hidden");

        if (currentUserRole === "admin") {
            userStatusBadge.textContent = "Mode Admin";
            userStatusBadge.className = "badge badge-admin";
            adminOnlyButtons.forEach(btn => btn.classList.remove("hidden"));
        } else {
            userStatusBadge.textContent = "Mode Siswa/Guest";
            userStatusBadge.className = "badge badge-guest";
            adminOnlyButtons.forEach(btn => btn.classList.add("hidden"));
        }

        renderMembers();
        renderGallery();
        renderKegiatan();
    }

    // TAB NAVIGATION
    const navButtons = document.querySelectorAll(".nav-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetTab = button.getAttribute("data-tab");

            navButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(tab => tab.classList.remove("active"));

            button.classList.add("active");
            document.getElementById(`tab-${targetTab}`).classList.add("active");
        });
    });

    // HELPER UNTUK KELAS BADGE JABATAN
    function getRoleBadgeClass(jabatan) {
        const j = jabatan.toLowerCase();
        if (j.includes("ketua")) return "role-badge role-ketua";
        if (j.includes("sekretaris")) return "role-badge role-sekretaris";
        if (j.includes("bendahara")) return "role-badge role-bendahara";
        if (j.includes("wali")) return "role-badge role-wali";
        return "role-badge role-siswa";
    }

    // RENDER ANGGOTA KELAS
    const teacherGrid = document.getElementById("teacher-grid");
    const officersGrid = document.getElementById("officers-grid");
    const studentsGrid = document.getElementById("students-grid");

    function renderMembers() {
        if (!teacherGrid || !officersGrid || !studentsGrid) return;

        // 1. Wali Kelas
        let waliActions = currentUserRole === "admin" ? `
            <div class="member-actions">
                <button class="btn-edit" onclick="editMember('wali', '${waliKelas.id}')">Edit</button>
            </div>
        ` : "";

        teacherGrid.innerHTML = `
            <div class="card member-card teacher-card">
                <img src="${waliKelas.foto}" alt="Foto ${waliKelas.nama}" class="member-photo">
                <h3>${waliKelas.nama}</h3>
                <span class="${getRoleBadgeClass(waliKelas.jabatan)}">${waliKelas.jabatan}</span>
                ${waliActions}
            </div>
        `;

        // 2. Pengurus & 3. Siswa
        officersGrid.innerHTML = "";
        studentsGrid.innerHTML = "";

        siswaList.forEach(siswa => {
            let actions = currentUserRole === "admin" ? `
                <div class="member-actions">
                    <button class="btn-edit" onclick="editMember('siswa', '${siswa.id}')">Edit</button>
                    <button class="btn-delete" onclick="deleteMember('${siswa.id}')">Hapus</button>
                </div>
            ` : "";

            const card = document.createElement("div");
            card.classList.add("card", "member-card");

            if (siswa.kategori === "pengurus") {
                card.classList.add("officer-card");
                card.innerHTML = `
                    <img src="${siswa.foto}" alt="Foto ${siswa.nama}" class="member-photo">
                    <h3>${siswa.nama}</h3>
                    <div><span class="${getRoleBadgeClass(siswa.jabatan)}">${siswa.jabatan}</span></div>
                    ${actions}
                `;
                officersGrid.appendChild(card);
            } else {
                card.innerHTML = `
                    <img src="${siswa.foto}" alt="Foto ${siswa.nama}" class="member-photo">
                    <h3>${siswa.nama}</h3>
                    <div><span class="${getRoleBadgeClass(siswa.jabatan)}">${siswa.jabatan}</span></div>
                    ${actions}
                `;
                studentsGrid.appendChild(card);
            }
        });
    }

    // EVENT DROPDOWN JABATAN KUSTOM
    const memberRoleSelect = document.getElementById("member-role-select");
    const customRoleGroup = document.getElementById("custom-role-group");

    memberRoleSelect.addEventListener("change", function () {
        if (this.value === "Lainnya") {
            customRoleGroup.classList.remove("hidden");
        } else {
            customRoleGroup.classList.add("hidden");
        }
    });

    // CRUD ANGGOTA KELAS
    const modalMember = document.getElementById("modal-member");
    const btnAddMember = document.getElementById("btn-add-member");
    const closeMemberModal = document.getElementById("close-member-modal");
    const formMember = document.getElementById("form-member");

    btnAddMember.addEventListener("click", () => {
        formMember.reset();
        document.getElementById("member-id").value = "";
        document.getElementById("member-type").value = "pengurus";
        document.getElementById("member-role-select").value = "Siswa";
        customRoleGroup.classList.add("hidden");
        document.getElementById("modal-member-title").textContent = "Tambah Anggota / Pengurus Baru";
        modalMember.classList.remove("hidden");
    });

    closeMemberModal.addEventListener("click", () => modalMember.classList.add("hidden"));

    formMember.addEventListener("submit", async (e) => {
        e.preventDefault();
        const id = document.getElementById("member-id").value;
        const type = document.getElementById("member-type").value;
        const nama = document.getElementById("member-name").value;
        
        // Penentuan Jabatan dari Dropdown / Kustom
        let jabatan = memberRoleSelect.value;
        if (jabatan === "Lainnya") {
            jabatan = document.getElementById("member-role-custom").value || "Siswa";
        }

        const fileInput = document.getElementById("member-photo-file");
        const urlInput = document.getElementById("member-photo-url").value;

        let fotoUrl = "https://via.placeholder.com/150";

        if (fileInput.files && fileInput.files[0]) {
            fotoUrl = await convertFileToBase64(fileInput.files[0]);
        } else if (urlInput.trim() !== "") {
            fotoUrl = urlInput;
        } else if (id) {
            if (type === "wali") fotoUrl = waliKelas.foto;
            else {
                const existing = siswaList.find(s => s.id === id);
                if (existing) fotoUrl = existing.foto;
            }
        }

        if (type === "wali") {
            waliKelas = { id: id || "wali-1", kategori: "wali", nama, jabatan, foto: fotoUrl };
        } else {
            if (id) {
                const s = siswaList.find(item => item.id === id);
                if (s) {
                    s.kategori = type;
                    s.nama = nama;
                    s.jabatan = jabatan;
                    s.foto = fotoUrl;
                }
            } else {
                siswaList.push({
                    id: Date.now().toString(),
                    kategori: type,
                    nama,
                    jabatan,
                    foto: fotoUrl
                });
            }
        }

        saveMembersToStorage();
        renderMembers();
        modalMember.classList.add("hidden");
    });

    window.editMember = function (type, id) {
        document.getElementById("member-photo-file").value = "";
        let currentJabatan = "";

        if (type === "wali") {
            document.getElementById("member-id").value = waliKelas.id;
            document.getElementById("member-type").value = "wali";
            document.getElementById("member-name").value = waliKelas.nama;
            document.getElementById("member-photo-url").value = waliKelas.foto;
            currentJabatan = waliKelas.jabatan;
        } else {
            const s = siswaList.find(item => item.id === id);
            if (s) {
                document.getElementById("member-id").value = s.id;
                document.getElementById("member-type").value = s.kategori || "siswa";
                document.getElementById("member-name").value = s.nama;
                document.getElementById("member-photo-url").value = s.foto;
                currentJabatan = s.jabatan;
            }
        }

        // Set Nilai Dropdown Jabatan
        const defaultOptions = ["Ketua Kelas", "Sekretaris 1", "Sekretaris 2", "Bendahara 1", "Bendahara 2", "Siswa", "Wali Kelas"];
        if (defaultOptions.includes(currentJabatan)) {
            memberRoleSelect.value = currentJabatan;
            customRoleGroup.classList.add("hidden");
        } else {
            memberRoleSelect.value = "Lainnya";
            customRoleGroup.classList.remove("hidden");
            document.getElementById("member-role-custom").value = currentJabatan;
        }

        document.getElementById("modal-member-title").textContent = "Edit Data, Jabatan & Foto";
        modalMember.classList.remove("hidden");
    };

    window.deleteMember = function (id) {
        if (confirm("Apakah Anda yakin ingin menghapus anggota kelas ini?")) {
            siswaList = siswaList.filter(s => s.id !== id);
            saveMembersToStorage();
            renderMembers();
        }
    };

    // RENDER KEGIATAN
    function renderKegiatan() {
        const kegiatanGrid = document.getElementById("kegiatan-grid");
        if (!kegiatanGrid) return;
        kegiatanGrid.innerHTML = "";
        kegiatanList.forEach(keg => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <h3>${keg.judul}</h3>
                <p style="color: #2563eb; font-weight:600; font-size:0.85rem; margin-bottom:8px;">${keg.tanggal}</p>
                <p>${keg.ket}</p>
            `;
            kegiatanGrid.appendChild(card);
        });
    }

    // RENDER GALERI & CRUD
    const galleryGrid = document.getElementById("gallery-grid");

    function renderGallery() {
        if (!galleryGrid) return;
        galleryGrid.innerHTML = "";

        galleryList.forEach((item) => {
            const galleryItem = document.createElement("div");
            galleryItem.classList.add("gallery-item");

            let mediaHTML = item.tipe === "video" 
                ? `<video controls><source src="${item.src}" type="video/mp4"></video>` 
                : `<img src="${item.src}" alt="${item.judul}">`;

            let adminActionHTML = currentUserRole === "admin" ? `
                <div class="media-actions">
                    <button class="btn-edit" onclick="editMedia('${item.id}')">Edit</button>
                    <button class="btn-delete" onclick="deleteMedia('${item.id}')">Hapus</button>
                </div>
            ` : "";

            galleryItem.innerHTML = `
                ${mediaHTML}
                <div class="gallery-info">
                    <p>${item.judul}</p>
                    ${adminActionHTML}
                </div>
            `;
            galleryGrid.appendChild(galleryItem);
        });
    }

    const modalMedia = document.getElementById("modal-media");
    const btnAddMedia = document.getElementById("btn-add-media");
    const closeMediaModal = document.getElementById("close-media-modal");
    const formMedia = document.getElementById("form-media");

    btnAddMedia.addEventListener("click", () => {
        formMedia.reset();
        document.getElementById("media-id").value = "";
        document.getElementById("modal-media-title").textContent = "Tambah Foto / Video Galeri";
        modalMedia.classList.remove("hidden");
    });

    closeMediaModal.addEventListener("click", () => modalMedia.classList.add("hidden"));

    formMedia.addEventListener("submit", async (e) => {
        e.preventDefault();
        const id = document.getElementById("media-id").value;
        const tipe = document.getElementById("media-type").value;
        const judul = document.getElementById("media-title").value;
        const fileInput = document.getElementById("media-file");
        const urlInput = document.getElementById("media-url").value;

        let srcUrl = "https://via.placeholder.com/400x250?text=Media";

        if (fileInput.files && fileInput.files[0]) {
            srcUrl = await convertFileToBase64(fileInput.files[0]);
        } else if (urlInput.trim() !== "") {
            srcUrl = urlInput;
        } else if (id) {
            const existing = galleryList.find(g => g.id === id);
            if (existing) srcUrl = existing.src;
        }

        if (id) {
            const item = galleryList.find(g => g.id === id);
            if (item) {
                item.tipe = tipe;
                item.judul = judul;
                item.src = srcUrl;
            }
        } else {
            galleryList.push({
                id: Date.now().toString(),
                tipe,
                judul,
                src: srcUrl
            });
        }

        saveGalleryToStorage();
        renderGallery();
        modalMedia.classList.add("hidden");
    });

    window.editMedia = function (id) {
        document.getElementById("media-file").value = "";
        const item = galleryList.find(g => g.id === id);
        if (item) {
            document.getElementById("media-id").value = item.id;
            document.getElementById("media-type").value = item.tipe;
            document.getElementById("media-title").value = item.judul;
            document.getElementById("media-url").value = item.src;
            document.getElementById("modal-media-title").textContent = "Edit Media Galeri";
            modalMedia.classList.remove("hidden");
        }
    };

    window.deleteMedia = function (id) {
        if (confirm("Apakah Anda yakin ingin menghapus media galeri ini?")) {
            galleryList = galleryList.filter(g => g.id !== id);
            saveGalleryToStorage();
            renderGallery();
        }
    };
});