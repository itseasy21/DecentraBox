import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/layout';
// import IPFS, { create } from 'ipfs';
import * as IPFS from 'ipfs';
import OrbitDB from 'orbit-db';
import KeyValueStore from 'orbit-db-kvstore';
import React, { useEffect, useState } from 'react';

import GeneralLayout from '../layouts/GeneralLayout';

export const OrbitTest: React.FC = () => {
    const [db, setdb] = useState<any>();
    const [ordb, setordb] = useState<OrbitDB>();
    const [ipfs, setipfs] = useState();
    const ipfsOptions = {
        repo: './dboxipfs/v2',
        start: true,
        preload: {
            enabled: true,
        },
        EXPERIMENTAL: {
            pubsub: true,
        },
        config: {
            Addresses: {
                Swarm: [
                    // Use IPFS dev signal server
                    // '/dns4/star-signal.cloud.ipfs.team/wss/p2p-webrtc-star',
                    // '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star',
                    // Use IPFS dev webrtc signal server
                    // '/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/',
                    // '/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star/',
                    // '/dns4/webrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star/',
                    // Use local signal server
                    '/dns4/secure-castle-81998.herokuapp.com/tcp/443/wss/p2p-webrtc-star/',
                ],
            },
        },
    };

    const options = {
        // Give write access to everyone
        accessController: {
            write: ['*'],
        },
    };

    useEffect(() => {
        console.log('running');
        loadDb();
    }, []);

    async function loadDb() {
        if (!ordb) {
            let tmpIPFS = ipfs;
            if (!ipfs) {
                tmpIPFS = await IPFS.create(ipfsOptions);
                setipfs(tmpIPFS);
            }

            const orbitdb = await OrbitDB.createInstance(tmpIPFS);
            setordb(orbitdb);
            const tmpDB = await orbitdb.keyvalue('firstdcb-database', options);
            // const tmpDB = await orbitdb.keyvalue(
            //     '/orbitdb/zdpuAropEtmRgvu1hxqmKK7osim6xD1nVKTS2hCbEERESRUXp/firstdcb-database',
            // );
            console.log(tmpDB.address.toString());
            await tmpDB.load();
            // const finalDB = await tmpDB.keyvalue(db);
            setdb(tmpDB);
            console.log('DB Loaded');
            console.log(tmpDB.all);
            // console.log(tmpDB.address.toString());
            // await orbitdb.disconnect();
        }
    }

    const tes = async () => {
        if (db && ordb) {
            // console.log(tmpdb);
            await db.put('key1', ['hello1', 'file2']);
            await db.put('key2', 'hello2');
            await db.put('key3', 'hello3');
            await db;
            // const value = tmpdb.get('key4');
            console.log(db.all);
            // tmpdb.close();
        }
    };

    const tes2 = async () => {
        if (db && ordb) {
            await db.put('key4', 'hello4');
            console.log(db.all);
            // tmpdb.close();
        }
    };

    return (
        <GeneralLayout>
            <Text>Hello</Text>
            <Button onClick={tes}>Lol</Button>
            <Button onClick={tes2}>Test</Button>
        </GeneralLayout>
    );
};
export default OrbitTest;
