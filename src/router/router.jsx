import { createBrowserRouter } from 'react-router-dom'
import { ErrorScreen } from '../app/ErrorScreen/ErrorScreen'
import { QuizScreen } from '../app/QuizScreen/QuizScreen'
import { WelcomeScreen } from '../app/WelcomeScreen/WelcomeScreen'
import { StatisticScreen } from '../app/StatisticsScreen/StatisticScreen'
import { ModalWindow } from '../components/ModalWindow/ModalWindow'
import { ResultScreen } from '../app/ResultScreen/ResultScreen'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/quiz',
    // Loader: chackIfAllFieldsAreSetted
    element: <QuizScreen />,
    children: [
      {
        path: '/quiz/modal',
        element: <ModalWindow />
      }
    ]
  },
  {
    path: '/stat',
    element: <StatisticScreen />
  },
  {
    path: '/result',
    element: <ResultScreen />
  }
])
