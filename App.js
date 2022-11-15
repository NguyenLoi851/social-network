import * as React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "expo-status-bar";
import FacebookBannerImage from "/assets/login-page/facebook-banner.jpg";



function HomeScreen({ navigation }) {
return (
    <>
      <StatusBar style="light" />

      {/* https://reactnative.dev/docs/image */}
      <Image source={FacebookBannerImage} style={styles.banner} />

      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TextInput
            style={[styles.input, styles.inputUsername]}
            placeholder="Phone or email"
            placeholderTextColor="#cdcdcf"
          />

          <TextInput
            style={[styles.input, styles.inputPassword]}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#cdcdcf"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.footer}>
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>


          <TouchableOpacity style={[styles.button, styles.buttonRegister]} 
          onPress={() => navigation.navigate('Tạo tài khoản')}>

            <Text style={[styles.buttonText, styles.buttonRegisterText]}>
              Create new Facebook account
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}


function CreateAccountScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>Tham gia Facebook</Text>
      <Text style={{textAlign: "center", fontSize:17}}>Chúng tôi sẽ giúp bạn tạo tài khoản sau vài bước dễ dàng</Text>

            <View style={{ textAlign: "center"}}> 
                <TouchableOpacity 
                style={[styles.button, {width:250}]}
                onPress={() => navigation.navigate('Tên')}
                >
                  <Text style={styles.buttonText}>Tiếp</Text>
                </TouchableOpacity>

      </View>

    </View>
  );
}


function NameScreen({ navigation }) {
  return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <Text style={{fontWeight: "bold", textAlign: "center", fontSize: 18}}> Bạn Tên gì? </Text>

          <Text style={{marginTop: 25}}>
          <TextInput style={styles.input}
            placeholder="Họ"
            placeholderTextColor="#cdcdcf"
          />

          <TextInput style={styles.input}
            placeholder="Tên"
            placeholderTextColor="#cdcdcf"
          />
          </Text>

      <View style={{ textAlign: "center"}}> 
                <TouchableOpacity 
                style={[styles.button, {width:250}]}
                onPress={() => navigation.navigate('Ngày sinh')}
                >
                  <Text style={styles.buttonText}>Tiếp</Text>
                </TouchableOpacity>

      </View>
      

    </View>
  );
}


function DateScreen({ navigation }) {
  return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>
            Ngày sinh của bạn khi nào?{' '}
          </Text>

          <View style={{ textAlign: "center"}}> 
            <TouchableOpacity 
            style={[styles.button, {width:250}]}
            onPress={() => navigation.navigate('Điều khoản & quyền riêng tư')}
            >
              <Text style={styles.buttonText}>Tiếp</Text>
            </TouchableOpacity>

          </View>
        </View>

  )
}

function RulesScreen({ navigation }) {
  return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>
            Hoàn tất đăng ký
          </Text>

               <View style={{ textAlign: "center"}}> 
                <TouchableOpacity 
                style={[styles.button, {width:250}]}
                onPress={() => navigation.navigate('Địa chỉ email')}
                >
                  <Text style={styles.buttonText}>Đăng ký</Text>
                </TouchableOpacity>

      </View>

        </View>
  )
}


function EmailScreen({ navigation }) {
  return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
          <Text style={{fontWeight: "bold", textAlign: "center", fontSize: 18}}> Nhập địa chỉ email của bạn? 
          </Text>


          <View style={styles.content}>
            <TextInput
              style={[styles.input, styles.inputPassword]}
              secureTextEntry={true}
              placeholder="Địa chỉ email"
              placeholderTextColor="#cdcdcf"
            /> 

            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('Xác nhận tài khoản')}
            >
              <Text style={styles.buttonText}>Tiếp</Text>
            </TouchableOpacity>

          </View>

        </View>
  )
}



function ConfirmScreen({ navigation }) {
  return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
            <View style={{ marginTop: 50}}>

    <Text style={{textAlign:"center"}}> Chúng tôi đã gửi SMS kèm mã tới 
    <Text style={{fontWeight: "bold"}}> 000000000  </Text>
</Text>

<Text style={{fontWeight: "bold", textAlign:"center"}}>Nhập mã gồm 5 chữ số từ SMS của bạn.</Text>

     </View>

<View style={styles.content}>

<Text>
FB-
          <TextInput
            style={[styles.input, styles.inputPassword]}
            secureTextEntry={true}
            placeholder="Địa chỉ email"
            placeholderTextColor="#cdcdcf"
          /> 
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Xác nhận</Text>
          </TouchableOpacity>

            <TouchableOpacity style={{
    height: 42,
    borderRadius: 6,
    backgroundColor: "#e5e6eb",
    justifyContent: "center",
    marginVertical: 15,
  }}
>
            <Text style={{
    textAlign: "center",
    fontSize: 16,
            }}>Tôi không nhận được mã</Text>
          </TouchableOpacity>

</View>

<Text style={{textAlign:"center"}}>Đăng xuất </Text>

        </View>
  )
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Tạo tài khoản" component={CreateAccountScreen} />
        <Stack.Screen name="Tên" component={NameScreen} />
        <Stack.Screen name="Ngày sinh" component={DateScreen} />
        <Stack.Screen name="Điều khoản & quyền riêng tư" component={RulesScreen} />
        <Stack.Screen name="Địa chỉ email" component={EmailScreen} />
        <Stack.Screen name="Xác nhận tài khoản" component={ConfirmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



const styles = StyleSheet.create({
  banner: {
    resizeMode: "contain",
    width: "100%",
    height: null,
    aspectRatio: 750 / 460, // Image ratio
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    padding: 22,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cdcdcf",
    color: "#333333",
    fontSize: 16,
    height: 44,
    paddingHorizontal: 15,
  },
  inputUsername: {
    borderBottomWidth: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  inputPassword: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  button: {
    height: 42,
    borderRadius: 6,
    backgroundColor: "#1977f3",
    justifyContent: "center",
    marginVertical: 15,
  },
  buttonText: {
    color: "#b4cafb",
    textAlign: "center",
    fontSize: 16,
  },
  link: {
    paddingVertical: 8,
  },
  linkText: {
    color: "#1c6ede",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
    padding: 22,
    paddingBottom: 0,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    marginBottom: 10,
  },
  dividerLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#cbccd0",
  },
  dividerText: {
    width: 50,
    textAlign: "center",
  },
  buttonRegister: {
    width: "100%",
    backgroundColor: "#e7f3ff",
  },
  buttonRegisterText: {
    color: "#1077f7",
  },
});











