module.exports = function toReadable (num) {
    const a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ',
               'eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    const b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let str = '';
    let n = ('000' + num).substr(-3).match(/^(\d)(\d{2})$/);

    if (num === 0){
        return 'zero';
    }

    str = `${(n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'hundred ' : ''}`;
    str += `${(n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) : ''}`;

    return str.trim();
}

