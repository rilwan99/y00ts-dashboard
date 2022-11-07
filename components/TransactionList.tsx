import { FC, useEffect, useState } from "react";
import { Card } from "./Card";
import styles from "../styles/Home.module.css"
import { NftTransaction } from "../models/NftTransaction";


export const TransactionList: FC = () => {
    const [transactions, setTransactions] = useState<NftTransaction[]>([]);
    const [page, setPage] = useState(10)

    const handleTransactions = async () => {
        const rawTransactions = await fetchTransactions()
        const nftAddresses: string[] = []
        rawTransactions.forEach((txn) => {
            nftAddresses.push(txn.nfts[0].mint)
        })
        console.log("RAW TRANSACTIONS---------")
        console.log(nftAddresses)
    }

    const fetchTransactions = async () => {
        const apiURL = "https://api.helius.xyz/v0/addresses"
        const address = "A4FM6h8T5Fmh9z2g3fKUrKfZn6BNFEgByR8QGpdbQhk1"
        const resource = "nft-events"
        const options = `api-key=d4ccf997-d0f7-4112-b129-93196d6a2742`
        const url = `${apiURL}/${address}/${resource}?${options}`
        const response = await fetch(url)
        const data = await response.json()
        console.log("REQUEST DATA-----------")
        console.log(data.slice(0, 10))
        setTransactions(data.slice(0, 10))
        return data.slice(0, 10)
    }

    useEffect(() => {
        handleTransactions()
    }, [])

    return (
        <div className={styles.grid}>
            {transactions.slice(0, 10).map((txn, i) => <Card key={i} nftTransaction={txn} />)}
        </div>
    )

}