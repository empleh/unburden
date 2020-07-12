import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Animations } from '../animations';
import { StyleVariables } from '../style_variables';
import * as Animatable from 'react-native-animatable';

const BottomAnimation = ({ triggerClear }: { triggerClear: boolean }) => {
    const window = Dimensions.get('window');
    const [elementHeight, setElementHeight] = useState(0);
    const [showContent, setShowContent] = useState(false);
    const animationRef = useRef();

    const runBottomAnimation = useCallback(async () => {
        await Animations.sleep(1000);
        setShowContent(true);
        // @ts-ignore
        await animationRef.current.animate(Animations.grow(elementHeight), Animations.mainAnimationTime / 2);

        // @ts-ignore
        await animationRef.current.animate(Animations.drop(window.height), Animations.mainAnimationTime / 2);

        setShowContent(false);
    }, [window.height, elementHeight]);

    useEffect(() => {
        if (triggerClear && animationRef && animationRef.current) {
            runBottomAnimation();
        }
    }, [triggerClear, runBottomAnimation]);

    const layoutComplete = (event: any) => {
        setElementHeight(event.nativeEvent.layout.height);
    };

    const renderStrips = (strips: number) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {Array.from(new Array(strips)).map((i, index) => {
                    return (
                        <ImageBackground
                            source={showContent ? require('../../assets/paper.png') : null}
                            key={`strip_${index}`}
                            style={styles.strip}
                        />
                    );
                })}
            </View>
        );
    };

    return (
        <View style={styles.bottom}>
            <Animatable.View ref={animationRef} useNativeDriver style={styles.wrapper} onLayout={layoutComplete}>
                <View style={showContent ? styles.paperBackground : styles.placeholder}>{showContent && renderStrips(16)}</View>
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    bottom: {
        flex: 3,
        backgroundColor: 'white',
    },
    wrapper: {
        paddingTop: StyleVariables.space.large,
        paddingBottom: StyleVariables.space.large * 2,
        paddingLeft: StyleVariables.space.large * 2,
        paddingRight: StyleVariables.space.large * 2,
    },
    placeholder: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    paperBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
    },
    strip: {
        marginLeft: 4,
        marginRight: 4,
        flex: 1,
    },
});

export default BottomAnimation;
