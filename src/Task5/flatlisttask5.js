import React from 'react';
import { StyleSheet, Image, View, FlatList } from 'react-native';

export default class FlatListTask5 extends React.Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    numColumns={3}
                    data={MyData}
                    renderItem={({ item }) => (
                        <View>
                            <Image
                                style={styles.imgStyle}
                                source={{
                                    uri: item.key
                                }}
                            />
                        </View>
                    )}

                />
            </View>
        );
    }
}




const MyData = [
    { key: 'https://tse4.mm.bing.net/th?id=OIP.QswVhpC8_Y6Fu-rZ_4dZwQHaE8&pid=Api' },
    { key: 'https://tse2.mm.bing.net/th?id=OIP.CueuouqUsNzhadxMw7xErwHaFI&pid=Api' },
    { key: 'https://tse4.mm.bing.net/th?id=OIP.NmlmqF7suARkUp7P7_QpVgHaFj&pid=Api' },
    { key: 'https://tse2.mm.bing.net/th?id=OIP.wKm33gOE5IhUusyi4K1TFQHaFJ&pid=Api' },
    { key: 'https://tse3.mm.bing.net/th?id=OIP.IEgHwT5PqPJtfc4WYEDkqgHaFj&pid=Api' },
    { key: 'https://tse1.mm.bing.net/th?id=OIP.kNJNHTCTp5Kr3DF-6JtQJQHaHa&pid=Api' },
    { key: 'https://tse3.mm.bing.net/th?id=OIP.-0fdfm60lvWSvE4GuGqasQHaHa&pid=Api' },
    { key: 'https://tse2.mm.bing.net/th?id=OIP.XpeNGJLcWcjMdC9gC1uVsQHaFj&pid=Api' },
    { key: 'https://tse4.mm.bing.net/th?id=OIP.qHZv74065LwGlq22Dy7Z4QHaFQ&pid=Api' },
    { key: 'https://tse4.mm.bing.net/th?id=OIP.TznB3pMapFjfpLR0duqa0QHaHa&pid=Api' },
    { key: 'https://tse3.mm.bing.net/th?id=OIP.D9B9wJEyk1Omacmyg4BmXAHaHa&pid=Api' },
    { key: 'https://tse3.mm.bing.net/th?id=OIP.SU-8XjUwOSSkUrYJWDsIDQHaE9&pid=Api' },
    { key: 'https://tse4.mm.bing.net/th?id=OIP.QswVhpC8_Y6Fu-rZ_4dZwQHaE8&pid=Api' },
    { key: 'https://tse2.mm.bing.net/th?id=OIP.wKm33gOE5IhUusyi4K1TFQHaFJ&pid=Api' },
    { key: 'https://tse4.mm.bing.net/th?id=OIP.TznB3pMapFjfpLR0duqa0QHaHa&pid=Api' },
    { key: 'https://tse3.mm.bing.net/th?id=OIP.D9B9wJEyk1Omacmyg4BmXAHaHa&pid=Api' },
    { key: 'https://tse3.mm.bing.net/th?id=OIP.dnJEgXJxL6_9KLTeXa8kCAHaKX&pid=Api' },
    { key: 'https://tse1.mm.bing.net/th?id=OIP.p4iR-KIAoNOD7qTbmPYllAHaE8&pid=Api' },
    { key: 'https://tse2.mm.bing.net/th?id=OIP.27HLoo_s3Imjps800afiyQHaEP&pid=Api' },
    { key: 'https://tse4.mm.bing.net/th?id=OIP.1A5YJxQQIxktTcoGJ4hBAAHaE8&pid=Api' },
    { key: 'https://tse4.mm.bing.net/th?id=OIP.GuOkJLurElGRXXcV_vdqggHaFj&pid=Api' },
    { key: 'https://tse4.mm.bing.net/th?id=OIP.RjLNfXXrQKGLYwleJdL1HQHaFj&pid=Api' },
    { key: 'https://tse1.mm.bing.net/th?id=OIP.LJ2gS0Ls28rtuiZddRvPsgHaFP&pid=Api' },
    { key: 'https://tse3.mm.bing.net/th?id=OIP.0KIQ-UTdpUIr8kUWz5kVYgHaE8&pid=Api' },
    { key: 'https://tse2.mm.bing.net/th?id=OIP.KF0mcpHcPrTKyhJ7iK_lqQHaEo&pid=Api' },
    { key: 'https://tse3.mm.bing.net/th?id=OIP.D9B9wJEyk1Omacmyg4BmXAHaHa&pid=Api' },
    { key: 'https://tse3.mm.bing.net/th?id=OIP.SU-8XjUwOSSkUrYJWDsIDQHaE9&pid=Api' },
    { key: 'https://tse4.mm.bing.net/th?id=OIP.QswVhpC8_Y6Fu-rZ_4dZwQHaE8&pid=Api' },
    { key: 'https://tse2.mm.bing.net/th?id=OIP.wKm33gOE5IhUusyi4K1TFQHaFJ&pid=Api' },
    { key: 'https://tse4.mm.bing.net/th?id=OIP.TznB3pMapFjfpLR0duqa0QHaHa&pid=Api' },
    { key: 'https://tse3.mm.bing.net/th?id=OIP.D9B9wJEyk1Omacmyg4BmXAHaHa&pid=Api' },
    { key: 'https://tse3.mm.bing.net/th?id=OIP.SU-8XjUwOSSkUrYJWDsIDQHaE9&pid=Api' },
    { key: 'https://tse4.mm.bing.net/th?id=OIP.QswVhpC8_Y6Fu-rZ_4dZwQHaE8&pid=Api' },
    { key: 'https://tse2.mm.bing.net/th?id=OIP.wKm33gOE5IhUusyi4K1TFQHaFJ&pid=Api' },
    { key: 'https://tse2.mm.bing.net/th?id=OIP.wKm33gOE5IhUusyi4K1TFQHaFJ&pid=Api' },
    { key: 'https://tse1.mm.bing.net/th?id=OIP.F94kObaQAj5_i-loJgy_NQHaEu&pid=Api' },
    { key: 'https://tse2.mm.bing.net/th?id=OIP.HBOdUCW7Qnpu77ylkmwcfAHaE8&pid=Api' },
    { key: 'https://tse2.mm.bing.net/th?id=OIP.wKm33gOE5IhUusyi4K1TFQHaFJ&pid=Api' },
    { key: 'https://tse4.mm.bing.net/th?id=OIP.TznB3pMapFjfpLR0duqa0QHaHa&pid=Api' },
    { key: 'https://tse3.mm.bing.net/th?id=OIP.D9B9wJEyk1Omacmyg4BmXAHaHa&pid=Api' },
    ]





const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        height: 700,
    },
    imgStyle: {
        width: 110,
        height: 110,
        marginRight: 10,
        borderRadius: 10,
        margin: 5
    },
    flatStyle: {
        margin: 10,
    }
});