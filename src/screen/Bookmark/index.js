import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image,ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import BookmarkCard from '../../Component/BookmarkCard';

export default function Bookmark() {

  const [Data, setData] = useState([]);
  const [Blank, setBlank] = useState(true);
  const isMounted = useRef(false);

  const Get = async()=>{
    let y = [];
    await firestore().collection('Bookmark').onSnapshot(querySnapshot=>{
     querySnapshot.docs.map(documentSnapshot=>{
        y.push({
          id : documentSnapshot.id,
          dat : documentSnapshot.data(),
        })
        if(isMounted.current){
          setData(y);
          setBlank(false);
        }
      });
    })
  }


  useEffect(() => {
    isMounted.current = true;
    Get();
    return ()=> isMounted.current = false;
  }, []);


  const Hapus = async(id) =>{
    await firestore().collection('Bookmark').doc(id).delete().then(()=>{
      Get();
      setData([]);
      setBlank(true);
    }).catch(e=>alert('terdapat kesalahan'));
  }


  const Empty = () =>{
    return(
      <View>
        <Image source={require('../../Asset/Image/Empty.png')} style={styles.empty}/>
      </View>
    )
  }

  const Exist = () =>{
    return(
      <ScrollView>
        {
          Data.map((x)=>{
            return(
              <View key={x.id}>
                <BookmarkCard nama={x.dat.Nama} gambar={x.dat.Gambar} kecamatan={x.dat.Kecamatan} kabupaten={x.dat.Kabupaten} onHapus={()=>Hapus(x.id)}/>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }


  return (
    <View>
      <Text style={styles.txt}>Penanda</Text>
      {
        Blank ? <Empty/> : <Exist/>
      } 
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {fontSize: 30, fontWeight: 'bold', color: 'black', padding: 30},
  empty: {height: 250, width: 250, marginVertical: 100, marginHorizontal: 60},
});
