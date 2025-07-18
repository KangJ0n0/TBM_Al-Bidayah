// src/data/documents.ts

// Definisikan tipe data untuk dokumen (ini akan memberikan autocompletion dan type-checking)
export interface DocumentItem {
  id: string; // ID unik untuk setiap dokumen, berguna jika nanti ada halaman detail dokumen
  title: string;
  fileUrl: string; // Path ke file PDF (misal: "/pdfs/documents/nama-file.pdf")
  description?: string; // Tanda '?' berarti opsional
  category?: string;
  publishedDate?: string; // Disimpan sebagai string, di-parse saat digunakan
  thumbnail?: string; // Path ke gambar thumbnail (misal: "/images/documents/thumb.webp")
}

export const documents: DocumentItem[] = [
  {
    id: "npp-al-bidayah",
    title: "Nomor Pokok Perpustakaan (NPP) TBM Al-Bidayah",
    fileUrl: "/pdfs/documents/NPP-TBM-Al-Bidayah.pdf",
    description: "Dokumen resmi Nomor Pokok Perpustakaan (NPP) TBM Al-Bidayah sebagai legalitas operasional.",
    category: "Legalitas",
    publishedDate: "2023-01-01",
    thumbnail: "/images/documents/npp-thumbnail.webp", // Contoh thumbnail
  },
  {
    id: "laporan-tahunan-2023",
    title: "Laporan Tahunan TBM Al-Bidayah Tahun 2023",
    fileUrl: "/pdfs/documents/Laporan-Tahunan-2023.pdf",
    description: "Ringkasan kegiatan, pencapaian, dan laporan keuangan TBM Al-Bidayah sepanjang tahun 2023.",
    category: "Laporan",
    publishedDate: "2024-02-15",
    thumbnail: "/images/documents/laporan-tahunan-2023-thumb.webp", // Contoh thumbnail
  },
  {
    id: "aturan-peminjaman-buku",
    title: "Aturan & Tata Tertib Peminjaman Buku",
    fileUrl: "/pdfs/documents/Aturan-Peminjaman-Buku.pdf",
    description: "Panduan lengkap mengenai prosedur dan tata tertib peminjaman buku di TBM Al-Bidayah.",
    category: "Panduan",
    publishedDate: "2024-01-01",
    thumbnail: "/images/documents/aturan-buku-thumb.webp",
  },
  // Tambahkan dokumen lain di sini
];
