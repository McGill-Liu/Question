// 获取DOM元素
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const answerContainer = document.getElementById('answer-container');
const correctAnswerDiv = document.getElementById('correct-answer');
const currentQuestionSpan = document.getElementById('current-question');
const questionTypeSpan = document.getElementById('question-type');
const progressSpan = document.getElementById('progress');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const showAnswerBtn = document.getElementById('show-answer-btn');
const hideAnswerBtn = document.getElementById('hide-answer-btn');
const submitAnytimeBtn = document.getElementById('submit-anytime-btn');
const submitBtn = document.getElementById('submit-btn');
const resultsBtn = document.getElementById('results-btn');
const scoreSummary = document.getElementById('score-summary');
const detailedResults = document.getElementById('detailed-results');
const questionSelect = document.getElementById('question-select');
const goToQuestionBtn = document.getElementById('go-to-question-btn');

// 初始化变量
let currentQuestionIndex = 0;
let userAnswers = [];
let quizFinished = false;
let questions = []; // 全局题目数组

// 页面加载完成后初始化测验
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否有全局定义的题目数组
    if (typeof window.questions !== 'undefined' && window.questions.length > 0) {
        initQuizWithQuestions(window.questions);
    }
    setupEventListeners();
});

// 使用指定的题目数组初始化测验
function initQuizWithQuestions(quizQuestions) {
    questions = quizQuestions;
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length);
    quizFinished = false;
    
    // 初始化题号选择下拉框
    initQuestionSelector();
    
    showQuestion(currentQuestionIndex);
    updateProgress();
    updateNavigationButtons();
    
    // 隐藏结果容器，显示测验容器
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('results-container').classList.add('hidden');
}

// HTML转义函数，将特殊字符转换为HTML实体
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    
    return text.replace(/[&<>"']/g, function(m) {
        return map[m];
    });
}


// 初始化测验
function initQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length);
    quizFinished = false;
    
    // 初始化题号选择下拉框
    initQuestionSelector();
    
    showQuestion(currentQuestionIndex);
    updateProgress();
    updateNavigationButtons();
    
    // 隐藏结果容器，显示测验容器
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
}

// 初始化题号选择下拉框
function initQuestionSelector() {
    questionSelect.innerHTML = '';
    questions.forEach((question, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `第${index + 1}题 (${question.type})`;
        questionSelect.appendChild(option);
    });
}

// 设置事件监听器
function setupEventListeners() {
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    showAnswerBtn.addEventListener('click', showAnswer);
    hideAnswerBtn.addEventListener('click', hideAnswer);
    submitAnytimeBtn.addEventListener('click', finishQuizAnytime);
    submitBtn.addEventListener('click', finishQuiz);
    resultsBtn.addEventListener('click', showResults);
    goToQuestionBtn.addEventListener('click', goToSelectedQuestion);
    questionSelect.addEventListener('change', function() {
        // 更新当前选中的题号
        const selectedIndex = parseInt(this.value);
        if (!isNaN(selectedIndex)) {
            updateQuestionSelection(selectedIndex);
        }
    });
}

// 更新题号选择器的选中状态
function updateQuestionSelection(index) {
    questionSelect.value = index;
}

// 跳转到选定的题目
function goToSelectedQuestion() {
    const selectedIndex = parseInt(questionSelect.value);
    if (!isNaN(selectedIndex) && selectedIndex >= 0 && selectedIndex < questions.length) {
        currentQuestionIndex = selectedIndex;
        showQuestion(currentQuestionIndex);
        updateProgress();
        updateNavigationButtons();
    }
}

// 显示题目
function showQuestion(index) {
    const question = questions[index];
    
    // 更新题号选择器的选中状态
    updateQuestionSelection(index);
    
    // 更新题目信息
    currentQuestionSpan.textContent = `第${index + 1}题`;
    questionTypeSpan.textContent = question.type;
    // 使用escapeHtml确保题目以纯文本形式显示
    questionText.innerHTML = `<p>${escapeHtml(question.question)}</p>`;
    
    
    // 隐藏答案显示区域
    hideAnswer();
    
    // 清空选项容器
    optionsContainer.innerHTML = '';
    
    // 根据题目类型生成选项或输入框
    if (question.type === "单选题") {
        generateSingleChoiceOptions(question);
    } else if (question.type === "多选题") {
        generateMultipleChoiceOptions(question);
    } else if (question.type === "名词解释题" || question.type === "简答题" || 
               question.type === "论述题" || question.type === "应用题") {
        generateTextAnswerArea(question);
    }
    
    // 恢复用户的答案（如果有的话）
    restoreUserAnswer(index);
}

// 生成单选题选项
function generateSingleChoiceOptions(question) {
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('label');
        optionElement.className = 'option';
        // 使用escapeHtml确保选项以纯文本形式显示
        optionElement.innerHTML = `
            <input type="radio" name="question" value="${index}">
            ${String.fromCharCode(65 + index)}. ${escapeHtml(option)}
        `;
        optionElement.addEventListener('click', function() {
            // 清除其他选项的选中状态
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            // 设置当前选项为选中状态
            this.classList.add('selected');
            // 保存用户答案
            userAnswers[currentQuestionIndex] = index;
        });
        optionsContainer.appendChild(optionElement);
    });
}

// 生成多选题选项
function generateMultipleChoiceOptions(question) {
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('label');
        optionElement.className = 'multiselect-option';
        // 使用escapeHtml确保选项以纯文本形式显示
        optionElement.innerHTML = `
            <input type="checkbox" name="question" value="${index}">
            ${String.fromCharCode(65 + index)}. ${escapeHtml(option)}
        `;
        optionElement.addEventListener('click', function(e) {
            // 切换选中状态
            this.classList.toggle('selected');
            // 保存用户答案
            saveMultipleChoiceAnswer();
        });
        optionsContainer.appendChild(optionElement);
    });
}

// 生成文本答题区域
function generateTextAnswerArea(question) {
    const textarea = document.createElement('textarea');
    textarea.className = 'answer-textarea';
    textarea.placeholder = '请在此处作答...';
    textarea.rows = 8;
    textarea.cols = 70;
    textarea.addEventListener('input', function() {
        userAnswers[currentQuestionIndex] = this.value;
    });
    optionsContainer.appendChild(textarea);
    
    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
        .answer-textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-family: "Microsoft YaHei", Arial, sans-serif;
            font-size: 16px;
            resize: vertical;
        }
    `;
    document.head.appendChild(style);
}

// 保存多选题答案
function saveMultipleChoiceAnswer() {
    const checkedBoxes = optionsContainer.querySelectorAll('input[type="checkbox"]:checked');
    const answers = Array.from(checkedBoxes).map(box => parseInt(box.value));
    userAnswers[currentQuestionIndex] = answers;
}

// 恢复用户的答案
function restoreUserAnswer(index) {
    const answer = userAnswers[index];
    if (answer === undefined) return;
    
    if (typeof answer === 'number') {
        // 单选题
        const optionElement = optionsContainer.querySelector(`input[value="${answer}"]`);
        if (optionElement) {
            optionElement.parentElement.classList.add('selected');
            optionElement.checked = true;
        }
    } else if (Array.isArray(answer)) {
        // 多选题
        answer.forEach(value => {
            const optionElement = optionsContainer.querySelector(`input[value="${value}"]`);
            if (optionElement) {
                optionElement.parentElement.classList.add('selected');
                optionElement.checked = true;
            }
        });
    } else if (typeof answer === 'string') {
        // 文本题
        const textarea = optionsContainer.querySelector('textarea');
        if (textarea) {
            textarea.value = answer;
        }
    }
}

// 显示答案
function showAnswer() {
    const question = questions[currentQuestionIndex];
    answerContainer.classList.remove('hidden');
    showAnswerBtn.classList.add('hidden');
    hideAnswerBtn.classList.remove('hidden');
    
    // 移除之前的正确/错误样式
    answerContainer.classList.remove('correct', 'incorrect');
    
    // 检查用户答案是否正确（仅对选择题）
    if (question.type === "单选题" || question.type === "多选题") {
        const isCorrect = checkAnswer(question, userAnswers[currentQuestionIndex]);
        if (isCorrect) {
            answerContainer.classList.add('correct');
        } else {
            answerContainer.classList.add('incorrect');
        }
    }
    
    // 格式化正确答案显示，并使用escapeHtml确保以纯文本形式显示
    if (question.type === "单选题") {
        const answerIndex = question.answer;
        correctAnswerDiv.innerHTML = `<p>${String.fromCharCode(65 + answerIndex)}. ${escapeHtml(question.options[answerIndex])}</p>`;
    } else if (question.type === "多选题") {
        let answerText = '';
        question.answer.forEach(index => {
            answerText += `<p>${String.fromCharCode(65 + index)}. ${escapeHtml(question.options[index])}</p>`;
        });
        correctAnswerDiv.innerHTML = answerText;
    } else {
        // 名词解释题、简答题、论述题、应用题
        // 将答案中的换行符转换为HTML的<br>标签，并使用escapeHtml确保以纯文本形式显示
        const escapedAnswer = escapeHtml(question.answer);
        const formattedAnswer = escapedAnswer.replace(/\n/g, '<br>');
        correctAnswerDiv.innerHTML = `<p>${formattedAnswer}</p>`;
    }
}

// 隐藏答案
function hideAnswer() {
    answerContainer.classList.add('hidden');
    showAnswerBtn.classList.remove('hidden');
    hideAnswerBtn.classList.add('hidden');
    
    // 移除正确/错误样式
    answerContainer.classList.remove('correct', 'incorrect');
}

// 更新进度显示
function updateProgress() {
    progressSpan.textContent = `进度: ${currentQuestionIndex + 1}/${questions.length}`;
}

// 更新导航按钮状态
function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
    
    // 如果测验已完成，显示查看结果按钮
    if (quizFinished) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.add('hidden');
        submitAnytimeBtn.classList.add('hidden');
        resultsBtn.classList.remove('hidden');
    } else {
        resultsBtn.classList.add('hidden');
    }
}

// 跳转到上一题
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        updateProgress();
        updateNavigationButtons();
    }
}

// 跳转到下一题
function goToNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        updateProgress();
        updateNavigationButtons();
    }
}

// 随时交卷
function finishQuizAnytime() {
    if (confirm("您确定要交卷吗？您可以继续答题或查看结果。")) {
        quizFinished = true;
        updateNavigationButtons();
        showResults();
    }
}

// 完成测验（到达最后一题时）
function finishQuiz() {
    quizFinished = true;
    updateNavigationButtons();
}

// 显示结果
function showResults() {
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    // 计算得分
    let correctCount = 0;
    
    // 清空详细结果容器
    detailedResults.innerHTML = '';
    
    // 遍历所有题目，检查答案（只对选择题评分）
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        let isCorrect = false;
        let resultItemClass = 'result-item';
        
        // 只对选择题进行自动评分
        if (question.type === "单选题" || question.type === "多选题") {
            isCorrect = checkAnswer(question, userAnswer);
            if (isCorrect) {
                correctCount++;
                resultItemClass += ' correct';
            } else {
                resultItemClass += ' incorrect';
            }
        } else {
            // 对于主观题，不进行评分，只显示答案对比
            resultItemClass += ' incorrect';
        }
        
        // 创建结果项
        const resultItem = document.createElement('div');
        resultItem.className = resultItemClass;
        
        resultItem.innerHTML = `
            <div class="question-text">${index + 1}. [${escapeHtml(question.type)}] ${escapeHtml(question.question)}</div>
            <div class="user-answer">您的答案: ${formatUserAnswer(question, userAnswer)}</div>
            <div class="correct-answer">参考答案: ${formatCorrectAnswer(question)}</div>
        `;
        
        detailedResults.appendChild(resultItem);
    });
    
    // 显示得分总结（只统计选择题）
    const totalMultipleChoiceQuestions = questions.filter(q => 
        q.type === "单选题" || q.type === "多选题").length;
    
    scoreSummary.innerHTML = `
        <p>选择题答对了 ${correctCount} 道题，共 ${totalMultipleChoiceQuestions} 道选择题</p>
        <p>选择题得分: ${totalMultipleChoiceQuestions > 0 ? Math.round((correctCount / totalMultipleChoiceQuestions) * 100) : 0} 分</p>
        <p>主观题（名词解释、简答、论述、应用题）需要人工评分</p>
    `;
}

// 检查答案是否正确
function checkAnswer(question, userAnswer) {
    if (userAnswer === undefined) {
        return false;
    }
    
    if (question.type === "单选题") {
        return userAnswer === question.answer;
    } else if (question.type === "多选题") {
        if (!Array.isArray(userAnswer) || !Array.isArray(question.answer)) {
            return false;
        }
        
        if (userAnswer.length !== question.answer.length) {
            return false;
        }
        
        // 检查每个答案是否都在正确答案中
        return userAnswer.every(ans => question.answer.includes(ans)) && 
               question.answer.every(ans => userAnswer.includes(ans));
    }
    
    return false;
}

// 格式化用户答案显示
function formatUserAnswer(question, answer) {
    if (answer === undefined) {
        return "未作答";
    }
    
    if (question.type === "单选题") {
        return String.fromCharCode(65 + answer) + ". " + escapeHtml(question.options[answer]);
    } else if (question.type === "多选题") {
        if (!Array.isArray(answer)) {
            return "未作答";
        }
        if (answer.length === 0) {
            return "未作答";
        }
        return answer.map(index => String.fromCharCode(65 + index)).join(", ") + 
               ". " + answer.map(index => escapeHtml(question.options[index])).join(", ");
    } else {
        // 对于主观题
        if (typeof answer === 'string' && answer.trim() !== '') {
            return escapeHtml(answer);
        } else {
            return "未作答";
        }
    }
}

// 格式化正确答案显示
function formatCorrectAnswer(question) {
    if (question.type === "单选题") {
        return String.fromCharCode(65 + question.answer) + ". " + escapeHtml(question.options[question.answer]);
    } else if (question.type === "多选题") {
        return question.answer.map(index => String.fromCharCode(65 + index)).join(", ") + 
               ". " + question.answer.map(index => escapeHtml(question.options[index])).join(", ");
    } else {
        // 对于主观题，转义答案中的HTML字符
        return escapeHtml(question.answer);
    }
}