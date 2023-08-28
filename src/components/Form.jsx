import { useState } from 'react'
import FormInput from './FormInput'

const initialErrorData = {
    id: '',
    pw: '',
    confirmPw: '',
}

const Form = ({ modalRef }) => {
    const [errorData, setErrorData] = useState(initialErrorData)

    const handleSubmit = (e) => {
        e.preventDefault()

        // 모든 errorData 값이 true인지 확인
        const isValid = Object.values(errorData).every(
            (value) => value === true
        )
        // isValid가 true일 경우 modal 창을 보여줌
        isValid && modalRef.current.showModal()
    }

    return (
        <form
            id="form"
            className="w-full max-w-md m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            {/* 아이디 입력란 */}
            <FormInput
                id={'id'}
                label={'아이디'}
                errorData={errorData}
                setErrorData={setErrorData}
                inputProps={{
                    type: 'text',
                    placeholder: '아이디를 입력해주세요.',
                    // autoFocus: true,
                }}
            />
            {/* 비밀번호 입력란 */}
            <FormInput
                id={'pw'}
                label={'비밀번호'}
                errorData={errorData}
                setErrorData={setErrorData}
                inputProps={{
                    type: 'password',
                    placeholder: '비밀번호를 입력해주세요',
                    autoComplete: 'off',
                }}
            />
            {/* 비밀번호 확인 입력란 */}
            <FormInput
                id={'confirmPw'}
                label={'비밀번호 확인'}
                errorData={errorData}
                setErrorData={setErrorData}
                inputProps={{
                    type: 'password',
                    placeholder: '비밀번호 확인을 입력해주세요.',
                    autoComplete: 'off',
                }}
            />
            <div className="flex items-center justify-center">
                {/* 가입하기 버튼 */}
                <input
                    id="submit"
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500"
                    value="가입하기"
                />
            </div>
        </form>
    )
}

export default Form
