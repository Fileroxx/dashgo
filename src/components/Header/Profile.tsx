import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex
        align="center"
        >
            <Box
            mr="4"
            textAlign="right"
            >
                <Text>Igor Fernandes</Text>
                <Text
                 color="gray.300"
                 fontSize="small"
                 >
                     igor_cesari@hotmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Igor Fernandes" src="https://github.com/Fileroxx.png" />   

        </Flex>
    );
}