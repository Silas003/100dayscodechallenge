import { View, Text } from 'react-native'
import React,{ useCallback, useMemo, useRef } from 'react'
import BottomSheet,{ BottomSheetView }from "@gorhom/bottom-sheet";
const TobiScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints =['90%']
  return (
    <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        
      >
        <BottomSheetView>
          <Text>Awesome 🔥</Text>
        </BottomSheetView>
      </BottomSheet>
  )
}

export default TobiScreen