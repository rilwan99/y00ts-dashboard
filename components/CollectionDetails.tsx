import { FC, useEffect, useState } from "react";
import styles from "../styles/CollectionDetails.module.css"
import { PublicKey } from '@solana/web3.js';
import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';



const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));



export const CollectionDetails: FC = () => {
    const [floorPrice, setFloorPrice] = useState(0)
    const [listed, setListed] = useState(0)
    const [volume, setVolume] = useState(0)
    const [avgPrice, setAvgPrice] = useState(0)
    const [minted, setMinted] = useState(0)

    const fetchNftStats = async () => {
        const response = await fetch("https://api-mainnet.magiceden.dev/v2/collections/y00ts/stats")
        const data = await response.json()
        console.log("NFT STATISTICS-------------")
        console.log(data)
        setFloorPrice(data.floorPrice)
        setListed(data.listedCount)
        setVolume(data.volumeAll)
        setAvgPrice(data.avgPrice24hr)
    }

    const fetchMintStats = async () => {
        const connection = new Connection(clusterApiUrl("mainnet-beta"));
        const metaplex = new Metaplex(connection);
        const candyMachine = await metaplex
            .candyMachines()
            .findByAddress({ address: new PublicKey("6A9aRFG7KirCpYJFFcNRetKsFLTxC221zaWZd8rYCLqe") });
        console.log("MINT STATISTICS--------")
        console.log(candyMachine.itemsMinted)
        setMinted(candyMachine.itemsMinted.toNumber())
    }

    useEffect(() => {
        fetchNftStats()
        fetchMintStats()
    }, [])


    return (
        <div className={styles.mainCard}>

            <div className={styles.subCard}>

                <img className={styles.img} src="./magic-eden.jpg" />

            </div>


            <div className={styles.subCard}>
                <p> Floor Price: {floorPrice / 1000000000} SOL</p>
                <p> Listed: {listed} y00ts</p>
                <p> Volume: {volume / 1000000000} SOL </p>
                <p> Average Price: {avgPrice / 1000000000} SOL </p>
            </div>

            <div className={styles.subCard}>
                <p>
                    Number of y00ts minted: {minted}
                </p>

                <BorderLinearProgress variant="determinate" value={(minted / 15000) * 100} />

                <br />

                <div className={styles.miniCard}>
                    <p>
                        Powered by
                    </p>
                    <img className={styles.img2} src="/helius-labs.png" />
                </div>

            </div>
        </div>)
}