import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChange } from '../actions';
import { View, Form, Item, Label, Input, Button, Text } from 'native-base';

class LoginForm extends Component {

  _onEmailChange(text) {
    this.props.emailChanged(text);
  }

  _onSenhaChange(text) {
    this.props.passwordChange(text);
  }

  render() {
    const { email, senha } = this.props;
    return (
      <Form>
        <Item stackedLabel>
          <Label>Email</Label>
          <Input
            value={email}
            keyboardType='email-address'
            placeholder='email@mail.com'
            onChangeText={this._onEmailChange.bind(this)}
          />
        </Item>
        <Item stackedLabel last>
          <Label>Senha</Label>
          <Input
            value={senha}
            placeholder='senha'
            secureTextEntry
            onChangeText={this._onSenhaChange.bind(this)}
          />
        </Item>
        <View style={{ alignSelf: 'center' }}>
          <Button style={{ marginVertical: 10 }} small>
            <Text>Log in</Text>
          </Button>
        </View>
      </Form>
    );
  }
}

const mapStateToProps = ({ login }) => (
  {
    email: login.email,
    senha: login.senha
  }
);

export default connect(mapStateToProps, { emailChanged, passwordChange })(LoginForm);