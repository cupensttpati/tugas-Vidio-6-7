function cetaknama(nama) {
    return 'Halo, nama saya ${nama}';
}

const pi = 3.14;

const mahasiswa = {
    nama : 'fadhil',
    umur : 20,
    cetakMhs()  {
        return 'halo, nama saya ${this.nama} dan saya ${this.umur} tahun.';
    },
};

class orang {
    constructor(){
        console.log('objek orang telah dibuat!!');
    }
}

//module.exports.cetaknama = cetaknama;
//module.exports.pi = pi;
//module.exports.mahasiswa = mahasiswa;

//module.exports = {
//    cetaknama: cetaknama,
//    mahasiswa: mahasiswa,
//    orang-orang, 
//  };

module.exports ={ cetaknama, pi, mahasiswa, orang};

