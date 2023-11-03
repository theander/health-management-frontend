import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

export default function ClientsPdf(props) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const reportTitle = [
    { text: 'Clientes', fontSize: 15, bold: true, margin: [15, 20, 0, 45] },
  ];
  const dados = props.map((usr) => [
    { text: usr.name, fontSize: 9, margin: [0, 2, 0, 2] },
    { text: usr.username, fontSize: 9, margin: [0, 2, 0, 2] },
    { text: usr.email, fontSize: 9, margin: [0, 2, 0, 2] },
    {
      text: usr.roles[0]?.name,
      fontSize: 9,
      margin: [0, 2, 0, 2],
    },
  ]);
  const details = [
    { text: 'Lista de usuários', style: 'header' },
    '',
    {
      table: {
        headerRows: 1,
        widths: ['*', '*', '*', '*'],
        body: [
          [
            { text: 'Nome', style: 'tableHeader', fontSize: 10 },
            { text: 'Username', style: 'tableHeader', fontSize: 10 },
            { text: 'E-mail', style: 'tableHeader', fontSize: 10 },
            { text: 'Role', style: 'tableHeader', fontSize: 10 },
          ],
          ...dados,
        ],
      },
      layout: 'lightHorizontalLines',
    },
  ];

  const rodape = [];
  const docDefinitions = {
    pageSize: 'A4',
    pageMargins: [30, 30, 20, 20],
    header: [reportTitle],
    content: [details],
    footer: [rodape],
  };
  pdfMake.createPdf(docDefinitions).download();
}
