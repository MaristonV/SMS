import styled from 'styled-components/native'


export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
  justify-content: center;
  
`;

export const Title = styled.Text`
  text-align: center;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

export const TextInformation = styled.Text`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #dddddd;
  line-height: 21px;
`;

export const Error = styled.Text`
  color: #e37a7a;
  text-align: center;
  margin-top: 10px;
`;

export const Form = styled.View`
  margin-top: 10px;
`;

export const Input = styled.TextInput`
  background-color: #ebebeb;
  border-radius: 3px;
  height: 44px;
  padding: 0px 20px;
  margin-bottom: 10px;
  border :#d4d4d4;
  line-height: 21px;
  
`;

export const Button = styled.TouchableOpacity`
  background-color: #ffffff;
  border-radius: 3px;
  height: 44px;
  padding: 0px 20px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  border: #db0707;
 
`;

export const Logo = styled.Image`
height:25%;
marginBottom: 40px;
width:auto;
`;

export const LogoMKS = styled.Image`
height:25%;
marginBottom: 40px;
width:auto;
`;

export const View = styled.View`

`;

export const ButtonText = styled.Text`
  color: #db0707;
  font-weight: bold;
  font-size: 14px;
  margin: 10px;
`;
