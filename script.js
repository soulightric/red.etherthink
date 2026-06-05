const articles = {
    'iot-badminton': {
        tag: 'IoT · React Native',
        title: 'Sistem Reservasi Lapangan Badminton Berbasis IoT',
        byline: 'Fikri Sujud · ITH · 8 menit baca',
        body: `
      <p>Proyek ini lahir dari kebutuhan nyata: lapangan badminton kampus sering kosong tanpa ada yang tahu, atau sebaliknya, semua orang ingin memakai lapangan di waktu yang sama tanpa ada sistem koordinasi.</p>
      <h3>Arsitektur sistem</h3>
      <p>Kami menggunakan <strong>ESP32</strong> sebagai mikrokontroler utama yang terhubung ke sensor <strong>PIR</strong> (untuk mendeteksi gerakan / kehadiran orang) dan <strong>LDR</strong> (untuk mendeteksi kondisi cahaya lapangan). Data dikirimkan secara real-time melalui protokol <strong>MQTT</strong> ke server Node.js.</p>
      <blockquote>"Sensor sederhana, ketika dikombinasikan dengan logika yang tepat, bisa memberikan konteks yang sangat kaya tentang dunia fisik."</blockquote>
      <h3>Backend dan AI</h3>
      <p>Server menggunakan <strong>Node.js + PostgreSQL</strong> untuk menyimpan data reservasi dan histori penggunaan. Kami menambahkan model <strong>collaborative filtering</strong> sederhana untuk merekomendasikan slot waktu berdasarkan pola penggunaan pengguna serupa.</p>
      <h3>Antarmuka pengguna</h3>
      <p>Aplikasi mobile dibangun menggunakan <strong>React Native</strong> — menampilkan status lapangan secara real-time, form reservasi, dan rekomendasi jadwal. Pengguna bisa melihat apakah lapangan sedang dipakai hanya dengan membuka aplikasi.</p>
      <p>Proyek ini dikembangkan sebagai bagian dari mata kuliah Riset Teknologi Informasi di Institut Teknologi Bacharuddin Jusuf Habibie.</p>
    `
    },
    'nextjs-seo': {
        tag: 'Next.js · SEO',
        title: 'Mengoptimalkan SEO di Next.js 16 dengan JSON-LD dan OpenGraph',
        byline: 'Fikri Sujud · Etherthink · 6 menit baca',
        body: `
      <p>Ketika kami membangun ulang <a href="https://etherthink.xyz" target="_blank">etherthink.xyz</a> menggunakan Next.js 16 dan Tailwind CSS v4, salah satu prioritas utama adalah memastikan situs bisa ditemukan di mesin pencari dengan benar.</p>
      <h3>Metadata dasar</h3>
      <p>Next.js 16 App Router menyediakan API <code>generateMetadata</code> yang memudahkan konfigurasi title, description, dan canonical URL per halaman. Kami juga mengonfigurasi <code>robots.txt</code> dan <code>sitemap.xml</code> yang digenerate secara otomatis.</p>
      <h3>OpenGraph dan Twitter Cards</h3>
      <p>Setiap halaman memiliki metadata OpenGraph yang lengkap — termasuk gambar thumbnail yang dioptimalkan untuk berbagai platform. Ini penting terutama untuk ketika konten dibagikan di media sosial.</p>
      <blockquote>"SEO bukan hanya tentang Google. Ini tentang bagaimana kontenmu terlihat di mana pun ia dibagikan."</blockquote>
      <h3>JSON-LD Schema</h3>
      <p>Kami mengimplementasikan JSON-LD schema untuk <code>Organization</code>, <code>WebSite</code>, dan <code>Person</code>. Ini membantu mesin pencari memahami konteks situs dan berpotensi mengaktifkan rich snippets di hasil pencarian.</p>
      <p>Hasilnya? Situs berhasil terindeks di Google Search Console dalam waktu kurang dari 48 jam setelah deployment.</p>
    `
    },
    'fedora-niri': {
        tag: 'Linux · Fedora',
        title: 'Migrasi dari KDE Plasma ke NIRI Window Manager di Fedora',
        byline: 'Fikri Sujud · 10 menit baca',
        body: `
      <p>Setelah berbulan-bulan menggunakan KDE Plasma di Dell Latitude 3570, saya memutuskan untuk mencoba sesuatu yang berbeda: NIRI, sebuah tiling Wayland compositor yang terinspirasi dari PaperWM.</p>
      <h3>Kenapa NIRI?</h3>
      <p>NIRI menawarkan model scrolling workspace — window disusun secara horizontal dan kamu bisa "scroll" di antara mereka. Ini terasa sangat natural untuk workflow yang melibatkan banyak jendela secara bersamaan.</p>
      <h3>Konfigurasi Waybar</h3>
      <p>Waybar dikonfigurasi untuk menampilkan informasi workspace, status jaringan, volume, dan jam. Yang menarik adalah integrasi dengan Noctalia Shell yang memberikan tampilan estetik yang konsisten.</p>
      <blockquote>"Desktop environment yang baik adalah yang tidak membuat kamu sadar bahwa kamu sedang menggunakannya."</blockquote>
      <h3>Masalah yang ditemui</h3>
      <p>Beberapa service KDE masih berjalan di background setelah migrasi — terutama <code>kdeconnect</code> dan <code>kglobalaccel</code>. Perlu disable manual melalui <code>systemctl --user</code>. Ada juga konflik OSD (On-Screen Display) yang perlu diselesaikan dengan menonaktifkan modul Waybar tertentu.</p>
      <p>Secara keseluruhan, NIRI memberikan pengalaman yang lebih responsif dan ringan dibanding KDE Plasma, meski membutuhkan waktu adaptasi yang tidak singkat.</p>
    `
    },
    'laravel-svc': {
        tag: 'Laravel · PHP',
        title: 'Membangun Sistem Feedback Kampus dengan Laravel 13',
        byline: 'Fikri Sujud · ITH · 12 menit baca',
        body: `
      <p>SVC (Student Voice Campus) adalah sistem pengaduan dan feedback mahasiswa yang dikembangkan sebagai tugas kuliah. Meski diawali sebagai proyek akademik, kami membangunnya dengan standar produksi yang serius.</p>
      <h3>Skema database</h3>
      <p>Sistem menggunakan 7 tabel: <code>mahasiswas</code>, <code>admins</code>, <code>pengaduans</code>, <code>kategoris</code>, <code>respon_admins</code>, <code>lampiran_files</code>, dan <code>notifikasis</code>. Relasi antar tabel dirancang untuk mendukung tracking status pengaduan secara lengkap.</p>
      <h3>Dual-guard authentication</h3>
      <p>Salah satu tantangan teknis utama adalah implementasi dua guard autentikasi terpisah — satu untuk mahasiswa dan satu untuk admin. Laravel memudahkan ini melalui konfigurasi multiple guards di <code>config/auth.php</code>.</p>
      <blockquote>"Fitur terbaik adalah yang tidak perlu dijelaskan cara pakainya."</blockquote>
      <h3>Blade views</h3>
      <p>12 Blade views menggunakan Bootstrap 5 dengan layout yang responsif. Halaman admin menampilkan dashboard dengan statistik pengaduan, sementara halaman mahasiswa fokus pada kemudahan pengiriman dan tracking status.</p>
      <p>Proyek ini mengajarkan banyak hal tentang arsitektur aplikasi multi-role — terutama bagaimana memisahkan concern antar tipe pengguna tanpa membuat kode menjadi terlalu kompleks.</p>
    `
    },
    'sql-injection': {
        tag: 'Security · Node.js',
        title: 'Membuat Lab SQL Injection untuk Keperluan Edukasi',
        byline: 'Fikri Sujud · Etherthink · 7 menit baca',
        body: `
      <p>Salah satu cara terbaik untuk memahami kerentanan keamanan adalah dengan membangun sendiri sistem yang rentan — dalam lingkungan yang terkontrol dan untuk tujuan edukasi.</p>
      <h3>Konsep</h3>
      <p>Aplikasi ini (<code>red.etherthink</code>) dirancang sebagai lab praktik SQL injection dengan empat level kesulitan yang progresif. Level 1 menampilkan kerentanan klasik tanpa proteksi apapun, sementara level 4 memerlukan pemahaman mendalam tentang blind injection.</p>
      <h3>Stack teknis</h3>
      <p>Kami menggunakan <strong>Node.js + Express</strong> sebagai backend dengan <strong>sql.js</strong> — implementasi SQLite murni dalam JavaScript. Pilihan ini memudahkan deployment tanpa perlu instalasi database eksternal.</p>
      <blockquote>"Kamu tidak bisa bertahan dari serangan yang tidak kamu pahami."</blockquote>
      <h3>Pelajaran yang dipetik</h3>
      <p>Membangun aplikasi yang sengaja rentan justru mengajarkan banyak hal tentang cara menulis kode yang aman. Setiap kerentanan yang kami implementasikan, kami juga mendokumentasikan cara mitigasinya — sehingga lab ini menjadi referensi dua arah: belajar menyerang dan belajar bertahan.</p>
      <p>Aplikasi ini hanya untuk dijalankan di environment lokal atau jaringan privat yang terisolasi.</p>
    `
    },
    'greedy-algo': {
        tag: 'Algoritma · Riset',
        title: 'Analisis Literatur Algoritma Greedy: 5 Makalah 2019–2025',
        byline: 'Fikri Sujud · ITH · 9 menit baca',
        body: `
      <p>Tugas analisis literatur ini melibatkan tinjauan mendalam terhadap lima makalah akademik Indonesia tentang algoritma greedy — sebuah paradigma pemrograman yang membuat pilihan lokal optimal di setiap langkah dengan harapan mencapai solusi global yang optimal.</p>
      <h3>Temuan utama</h3>
      <p>Dari lima makalah yang dianalisis (terbit antara 2019–2025), ada beberapa pola menarik: algoritma greedy paling banyak diterapkan dalam domain penjadwalan (scheduling) dan optimasi rute. Hampir semua makalah menggunakan pendekatan Greedy Best-First sebagai baseline sebelum membandingkannya dengan metode lain.</p>
      <blockquote>"Greedy bukan tentang menjadi tamak — ini tentang membuat keputusan terbaik dengan informasi yang tersedia saat ini."</blockquote>
      <h3>Perbandingan dengan A*</h3>
      <p>Beberapa makalah membandingkan greedy dengan A* search. Temuan konsisten: greedy lebih cepat secara komputasi tetapi tidak selalu menghasilkan solusi optimal. A* dengan heuristik admissible menjamin optimalitas dengan trade-off performa.</p>
      <h3>Format penulisan</h3>
      <p>Dokumen analisis ditulis dalam format standar akademik Indonesia — Times New Roman, kertas A4 landscape, margin 4-3-3-3 cm — sesuai pedoman penulisan ilmiah yang berlaku di lingkungan kampus ITH.</p>
    `
    }
};

function openArticle(id) {
    const a = articles[id];
    if (!a) return;
    document.getElementById('modalTag').textContent = a.tag;
    document.getElementById('modalTitle').textContent = a.title;
    document.getElementById('modalByline').textContent = a.byline;
    document.getElementById('modalBody').innerHTML = a.body;
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeArticle() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function closeOnOverlay(e) {
    if (e.target === document.getElementById('modalOverlay')) closeArticle();
}

function handleSubscribe(btn) {
    const input = btn.previousElementSibling;
    if (!input.value || !input.value.includes('@')) {
        input.focus();
        input.style.borderColor = '#e8673a';
        setTimeout(() => input.style.borderColor = '', 1200);
        return;
    }
    btn.textContent = '✓ Terdaftar!';
    btn.style.background = '#3b7a4a';
    btn.disabled = true;
    input.value = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeArticle();
});