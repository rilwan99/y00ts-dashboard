import { FC } from "react";
import { NftTransaction } from "../models/NftTransaction";
import styles from "../styles/Card.module.css"

export interface TransactionProps {
  nftTransaction: NftTransaction;
}

export const Card: FC<TransactionProps> = (props) => {

  const timestamp = props.nftTransaction.timestamp
  const milliseconds = timestamp * 1000
  const dateObject = new Date(milliseconds)
  const humanDateFormat = dateObject.toLocaleString()

  const tokenIdSubstring = props.nftTransaction.description.split(" ")
  const tokenId = tokenIdSubstring[3].slice(1)
  const url = "https://metadata.y00ts.com/y/" + tokenId + ".png"

  return (
    <div className={styles.mainCard}>

      <div className={styles.subCard}>
        <h2>{props.nftTransaction.description.slice(0, 80)}</h2>
        <p>{humanDateFormat}</p>
        < br />
        {/* <p>TokenId: {tokenId}</p> */}

        {/* <p>Type: {props.nftTransaction.type}</p> */}
        <p>Amount: {props.nftTransaction.amount / 1000000000} SOL</p>
        <p>{props.nftTransaction.signature}</p>
      </div>

      <div>
        <img className={styles.img} src={url} />
      </div>
    </div>
  )

}