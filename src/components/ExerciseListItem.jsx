import { StyleSheet, Text, View } from 'react-native';








export default function ExerciseListItem({item}) {
    return (
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName} >{item.name}</Text>
        <Text style ={styles.exerciseSubtitles} >{item.muscle.toLocaleUpperCase()}|{item.equipment.toLocaleUpperCase()}</Text>
      </View>
    );
  }
  






  const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor:'#fff',
    padding:10,
    borderRadius:10,
    gap:5,
  },
    exerciseName: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    exerciseSubtitles: {
      color: 'grey',
    },
  });