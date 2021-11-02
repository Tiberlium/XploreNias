import React,{useEffect,useState,useRef} from 'react'
import { View, Text,StyleSheet,ScrollView } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import FullCard from '../../Component/FullCard';

export default function All({navigation}) {
    const [Data, setData] = useState([]);
    const isMounted = useRef(false);

    const getDocs = async()=>{
        let x = [];
        const all = await firestore().collection('Wisata').get();
        all.docs.map((doc)=>{
            x.push({
                id:doc.id,
                dat:doc.data(),
            })
        })
        if(isMounted.current){
            setData(x);
        }
    }

    useEffect(() => {
       isMounted.current = true;
       getDocs();
       return () => {isMounted.current = false};
    }, [])

    
    return (
        <View>
            <Text style={styles.txt}>Semua Tempat</Text>
            <ScrollView>
                {
                    Data.map((x)=>{
                        return(
                            <View key={x.id}>
                                <FullCard nama={x.dat.Nama} gambar={x.dat.Gambar} kecamatan={x.dat.Kecamatan} kabupaten={x.dat.Kabupaten} onPress={()=>navigation.push('Detail',{unique:x.id})}/>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}


const styles= StyleSheet.create({
    txt:{fontWeight:'bold',fontSize:30,color:'black',padding:30}
})