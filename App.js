import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import InputSpinner from 'react-native-input-spinner';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={{ width: 430, height: 350, backgroundColor: '#F7F1F1' }}>
        <View style={styles.content11}>
          <View style={styles.content111}>
            <Image style={styles.img1} source={require('./image/sp.jpg')} />
          </View>
          <View style={styles.content112}>
            <Text style={styles.content1121} >Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.content1122}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.content1123}>141.800 đ</Text>
            <Text style={styles.content1124}>141.000 đ</Text>

            <View style={styles.content1125}>
                <InputSpinner style={{height:20}}></InputSpinner>
                <Text style={styles.content11252}>Mua sau</Text>
            </View>

          </View>
        </View>
        <View style={styles.content12}>
              <Text style={{marginLeft:20,fontWeight:'bold'}}>Mã giảm giá đã lưu</Text>
              <Text style={{color:"blue", fontWeight: 'bold', marginLeft:15}}>Xem tại đây</Text>
        </View>

        <View style={styles.content13}>
            <View style={styles.content131}>
              <Text style={{fontWeight:'bold', fontSize:20}}>    MÃ GIẢM GIÁ     </Text>
            </View>
            <View style={styles.content132}>
                <Button style={styles.btnapdung} title='Áp dụng'/>
            </View>
        </View>
      </View>

      <View style={{ width: 415, height: 60, backgroundColor: '#F7F1F1', marginTop: 15, flexDirection: 'row', }}>
        <Text style={styles.content21}>Bạn có phiếu quà tặng Kiti/Got it/ Urbox?</Text>
        <Text style={styles.content22}>Nhập tại đây?</Text>
      </View>

      <View style={{ width: 415, height: 350, backgroundColor: '#C8C4C4', marginTop: 15 }}>
        <View style={styles.content31}>
          <Text style={styles.content311}>Tạm tính</Text>
          <Text style={styles.content312}>141.800 đ</Text>
        </View>
        <View style={styles.content32}>
          <View style={styles.content321}>
            <Text style={styles.content3211}>Thành tiền</Text>
            <Text style={styles.content3212}>141.800 đ</Text>
          </View>
          <View style={styles.content322}>
            <Button style={styles.button} title="TIẾN HÀNH ĐẶT HÀNG" />
          </View>
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8C4C4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content11: {
    height: 200,
    backgroundColor: '#F7F1F1',
    flexDirection: 'row'
  },
  content111: {


  },

  img1: {
    marginTop: 40,
    marginLeft: 25,
    width: 120,
    height: 150
  },
  content112: {
    marginTop: 40,
    marginLeft: 20
  },
  content1121: {
    fontWeight: 'bold'
  },
  content1122: {
    fontWeight: 'bold',
    marginTop: 5
  },
  content1123: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'red',
    marginTop: 5
  },
  content1124: {
    fontWeight: 'bold',
    marginTop: 5
  },
  content1125: {
    flexDirection: 'row'
  },

  content11252: {
    color: 'blue',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft:20
  },


  content12: {
    height: 60,
    backgroundColor: '#F7F1F1',
    flexDirection: 'row'
  },



  content13: {
    height: 90,
    
    flexDirection:'row'
  },
  content131:{
    borderWidth:2,
   margin:28
  },
  content132:{
    marginTop:25  ,
    marginLeft:30
  },
  btnapdung:{
    fontSize:20, 
  },




  content21: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 18,
    paddingLeft: 20
  },
  content22: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 18,
    paddingLeft: 10,
    color: 'blue'
  },


  content31: {
    height: 70,
    backgroundColor: '#F7F1F1',
    flexDirection: 'row'
  },
  content311: {
    fontSize: 23,
    fontWeight: 'bold',
    paddingTop: 17,
    paddingLeft: 20
  },
  content312: {
    fontSize: 23,
    fontWeight: 'bold',
    paddingTop: 17,
    paddingLeft: 140,
    color: 'red'
  }
  ,
  content32: {
    height: 70,
    backgroundColor: '#F7F1F1',
    marginTop: 130,
    height: 150

  },
  content321: {
    flexDirection: 'row',

  },
  content3211: {
    fontSize: 23,
    fontWeight: 'bold',
    paddingLeft: 20,
    color: '#827070',
    paddingTop: 10
  },
  content3212: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'red',
    paddingLeft: 140,
    paddingTop: 10
  },


  content322: {
    marginTop: 50
  },
  button: {
    color: "while",
    backgroundColor: 'red',
    fontSize: 30,
    fontWeight: 'bold',


  }


});
