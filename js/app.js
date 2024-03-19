function cetakData() {
    var nama = document.getElementById('nama').value;
    var jabatan = document.getElementById('jabatan').value;
    var status = document.getElementById('status').value;
    var gaji;

    switch (jabatan) {
        case 'Manager':
            gaji = 15000000;
            break;
        case 'Asisten Manager':
            gaji = 10000000;
            break;
        case 'Staff':
            gaji = 5000000;
            break;
        default:
            gaji = 0;
    }

    var pegawai = new Pegawai(nama, jabatan, status, gaji);
    var tunjanganJabatan = hitungTunjanganJabatan(gaji);
    var bpjs = hitungBPJS(gaji);
    var tunjanganKeluarga = hitungTunjanganKeluarga(status, gaji);
    var totalGaji = gaji + tunjanganJabatan - bpjs + tunjanganKeluarga;

    var hasil = "<table><thead><tr><th colspan='2' align='center'>Data Pegawai</th></tr></thead><tbody>";


    hasil += "<tr><td><strong>Nama Pegawai:</strong></td><td>" + pegawai.nama + "</td></tr>";


    hasil += "<tr><td><strong>Jabatan:</strong></td><td>" + pegawai.jabatan + "</td></tr>";


    hasil += "<tr><td><strong>Status:</strong></td><td>" + pegawai.status + "</td></tr>";


    hasil += "<tr><td><strong>Gaji Pokok:</strong></td><td>" + gaji + "</td></tr>";


    hasil += "<tr><td><strong>Tunjangan Jabatan:</strong></td><td>" + tunjanganJabatan + "</td></tr>";


    hasil += "<tr><td><strong>BPJS:</strong></td><td>" + bpjs + "</td></tr>";


    hasil += "<tr><td><strong>Tunjangan Keluarga:</strong></td><td>" + tunjanganKeluarga + "</td></tr>";


    hasil += "<tr><td><strong>Total Gaji:</strong></td><td>" + totalGaji + "</td></tr>";

    hasil += "</tbody></table>"; 

    document.getElementById('hasil').innerHTML = hasil;
}
