import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChange, loginUser } from '../actions';
import { View, Form, Item, Label, Input, Button, Text } from 'native-base';

class LoginForm extends Component {

  _onEmailChange(text) {
    this.props.emailChanged(text);
  }

  _onSenhaChange(text) {
    this.props.passwordChange(text);
  }

  _onLoginButtonPress() {
    const { email, senha, loginUser } = this.props;
    loginUser({ email, senha });
  }

  renderError() {
    const { error } = this.props;

    if (error) {
      return (
        <View>
          <Text style={{ color: 'red', alignSelf: 'center', paddingTop: 10 }}>{error}</Text>
        </View>
      );
    }
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
        {this.renderError()}
        <View style={{ alignSelf: 'center' }}>
          <Button style={{ marginVertical: 10 }} small onPress={this._onLoginButtonPress.bind(this)}>
            <Text>Log in</Text>
          </Button>
        </View>
      </Form>
    );
  }
}

const mapStateToProps = ({ login }) => {
  const { email, senha, error } = login;

  return {
    email,
    senha,
    error
  };
};

export default connect(mapStateToProps,
  { emailChanged, passwordChange, loginUser }
)(LoginForm);