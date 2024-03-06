import {
  setTotalQuestionQty,
  setChoosenCategory,
  setChoosenDiff,
  setChoosenType
} from '../../../redux/reducers/statReducer'
import { useDispatch } from 'react-redux'
import { QuestionInterface } from '../../../redux/reducers/questionsQuiz'


export const useAddDataToStat = (currentQuestionData: QuestionInterface): () => void => {
  const dispatch = useDispatch()

  const addDataToStat = () => {
    dispatch(setChoosenCategory(currentQuestionData.category))
    dispatch(setTotalQuestionQty())
    dispatch(setChoosenDiff(currentQuestionData.difficulty))
    dispatch(setChoosenType(currentQuestionData.type))
  }

  return addDataToStat
}
