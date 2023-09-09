


export const headCells = [
  {
    id: 'id',
    numeric: 'center',
    disablePadding: true,
    label: 'Mã phiếu',
  },
  {
    id: 'nameProduct',
    numeric: 'left',
    disablePadding: false,
    label: 'Tên sản phẩm',
  },
  {
    id: 'price',
    numeric: 'right',
    disablePadding: false,
    label: 'Giá bán',
  },
  {
    id: 'stock',
    numeric: 'center',
    disablePadding: false,
    label: 'Giá bán',
  },
  {
    id: 'idService',
    numeric: 'center',
    disablePadding: false,
    label: 'Mã phiếu dịch vụ',
  },
  {
    id: 'status',
    numeric: 'center',
    disablePadding: false,
    label: 'Trạng thái',
  },
  {
    id: 'type',
    numeric: 'left',
    disablePadding: false,
    label: 'Loại',
  },
  {
    id: 'nameTech',
    numeric: 'center',
    disablePadding: false,
    label: 'Kỹ thuật',
  },
];


//fake data

function createData(id, nameProduct, price, stock, idService,status,type,nameTech) {
  return {
    id,
    nameProduct,
    price,
    stock,
    idService,
    status,
    type,
    nameTech,
  };
}

export const rows = [
  createData('XKLK21738', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
  createData('XKLK232328', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
  createData('XKLK214444', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
  createData('XKLK23338', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
  createData('XKLK21434', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
  createData('XKLK211111', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
  createData('XKLK23333', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
  createData('XKLK45455', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
  createData('XKLK21241', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
  createData('XKLK23535', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
  createData('XKLK24554', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
  createData('XKLK21343', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
  createData('XKLK21235', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
  createData('XKLK21111', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
  createData('XKLK24432', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
  createData('XKLK23232', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'), 
  createData('XKLK11651', 'Kính iPhone 14 Pro Max', '70,000đ', 'TLM', 'PBH98142', 'Yêu cầu','Linh kiện cần', 'Bình'),
];
