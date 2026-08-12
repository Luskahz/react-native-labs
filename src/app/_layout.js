import { Stack } from "expo-router";
import { PortalHost } from '@rn-primitives/portal';

export default function Layout(){
    return(
        <>
            <Stack>
                <Stack.Screen name ="index" options={{ title: 'Entrar'}}/>
                <Stack.Screen name ="signup" options={{ title: 'Cadastrar'}}/>
            </Stack>
            <PortalHost />
        </>
    )
}
