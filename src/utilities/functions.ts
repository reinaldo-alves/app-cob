const videosId = ['G_W_KXg4Bfo', 'QKUSzUI0Mzg', 'wC70YDalHZk', 'BXig5MXRlek', 'hk9QoN8kSiA', 'BxNiG5QaLnc', 'tmU-1cb2Sng', 'XoRGubKLoIk', 'dBCFwO1Hi1U', 'gPwxPChfVuY', 'WWTrf5uhYog', 'lSYhjcb9_wE', '0TqCR_FlpdY', 'oD63kpgH1kc', '1s6sq0V9dYY', 'uU75qXVCW-s', 'sU45p0uTjkk', '1wbKkCO7LjY', 'aj-E6nUYdlk', 'txtZ1Axuqw0', 'Uui1GQLqurQ', 'KZcIL_v90i8', '4GzvRRiCRcI', '56zE2ZXzcVk', 'R-AyOcbgKa8', 'VG-QoLM1wuU', 'wVQo9tD0MDQ', 'JR70DTIotEA', 'hsRU9zL_nmw', 'OAclkVWhr3A', 'UKiuFGxRIM0', '6fvcPkn1wFI', 'PPfCiWZvOCw', 'j_8s_vaiYlc', 'd8Ks-S__umY', 'OTvEjQRsoqA', 'rRwujI2it0Q', 'Yxb1OUDbW9w', 'bsSATRqenrc', 'PyTJLQFY1ug', 'f8xHSg5SyP4', 'UgI2xAS25zY', 'gg3IJrRvYtk', 'yhGN4MHuPXE', 'SdMA9LD0_Lk', 'Zq-G-nj6Rhk', 'U-yT32h5VBU', 'lCu5TQUlAtg', 'Dr0wgVe69_o', 'ssZBV_T8GCU', 'i-sspop8AeI', '29pLD_oXHlU', 'hwzexvu0YrY', '9tCD1Tl6BW4', 'nm5hfjy-4Sg', 'v7tABBBuuJI', 'f1wY574IExc', '6ZdEM9ZQKcU', 'eKb2SbhPe-E', 'reW4dp0ORn4', 'wKCkTdc932k', '-kGXT0Trv0E', 'Wc-Z8jpZs24', 'Psy2t56AqJc', 'STkNHxLJTnA', 'xbmUyhG1-0o', 'Ch9N7LmRsFE'];

export function selectRandomVideos() {
    const index = Math.floor(Math.random() * videosId.length);
    const random = videosId[index];
    return random
}