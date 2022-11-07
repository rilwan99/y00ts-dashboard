export class MintDetails {
  mint: string;
  tokenStandard: string;

  constructor(mint: string, tokenStandard: string) {
    this.mint = mint;
    this.tokenStandard = tokenStandard;
  }
}

export class NftTransaction {
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
  nfts: MintDetails[];

  constructor(
    description: string,
    type: string,
    source: string,
    amount: number,
    fee: number,
    feePayer: string,
    signature: string,
    slot: number,
    timestamp: number,
    saleType: string,
    buyer: string,
    seller: string,
    staker: string,
    nfts: MintDetails[]
  ) {
    this.description = description;
    this.type = type;
    this.source = source;
    this.amount = amount;
    this.fee = fee;
    this.feePayer = feePayer;
    this.signature = signature;
    this.slot = slot;
    this.timestamp = timestamp;
    this.saleType = saleType;
    this.buyer = buyer;
    this.seller = seller;
    this.staker = staker;
    this.nfts = nfts;
  }
}
