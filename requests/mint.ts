// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type NftTransactionType = {
  description: string;
  type: string;
  source: string;
  amount: number;
  fee: number;
  feePayer: string;
  signature: string;
  slot: number;
  timestamp: number;
  saleType: string;
  buyer: string;
  seller: string;
  staker: string;
  nfts: object[];
};

let NftTransaction: NftTransactionType;

export default async function fetchTransactions(): Promise<
  NftTransactionType[]
> {
  const apiURL = "https://api.helius.xyz/v0/addresses";
  const address = "A4FM6h8T5Fmh9z2g3fKUrKfZn6BNFEgByR8QGpdbQhk1";
  const resource = "nft-events";
  const options = `api-key=d4ccf997-d0f7-4112-b129-93196d6a2742`;
  const url = `${apiURL}/${address}/${resource}?${options}`;
  const response: Response = await fetch(url);
  const data: Promise<any> = await response.json();
  Object.entries(data).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  // let result: [NftTransactionType];
  // data.array.forEach(element => {
  //   result.push(NftTransaction{
  //     description: element.description
  //   })
  // });
  return data;
}
