// <CtryNm>NIGERIA</CtryNm>
// <CcyNm>Naira</CcyNm>
// <Ccy>NGN</Ccy>
// <CcyNbr>566</CcyNbr>
// <CcyMnrUnts>2</CcyMnrUnts>

export const naira = prop =>
  new Intl.NumberFormat('en-US', {
    currency: 'NGN',
    currencyDisplay: 'symbol',
    maximumFractionDigits: 2,
    ...prop
  }).format;
