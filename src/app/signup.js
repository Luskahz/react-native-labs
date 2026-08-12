import { Button } from '@/feature/ui/button';
import { Input } from '@/feature/ui/input';
import { Text } from '@/feature/ui/text';
import { useState, useRouter } from 'react';
import { router } from 'expo-router';
import { View } from 'react-native-web';

export default function SignupScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    function handlerSubmit() {
        console.log({
            email, password
        })
        router.push('/')
    }

    return (
        <View className="flex p-10">
            <Text variant="h1" className={"pb-10"}> Login </Text>
            <View className={"pb-5 gap-1"}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Digite sua senha"
                    secureTextEntry
                />
            </View>
            <Button onPress={handlerSubmit}>
                <Text>Continuar</Text>
            </Button>
        </View>
    )
}