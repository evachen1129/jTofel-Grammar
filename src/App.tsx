/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Library, 
  Trophy, 
  Users, 
  BookOpen, 
  Info,
  Check,
  X,
  ArrowRight
} from 'lucide-react';
import { questions } from './questions';

const SCENARIO_ICONS = {
  Library: <Library className="w-5 h-5" />,
  Sports: <Trophy className="w-5 h-5" />,
  Meeting: <Users className="w-5 h-5" />,
  Homework: <BookOpen className="w-5 h-5" />,
};

const SCENARIO_LABELS = {
  Library: '校园图书馆',
  Sports: '运动会',
  Meeting: '班级会议',
  Homework: '家庭作业',
};

export default function App() {
  const [showCover, setShowCover] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isCorrect = selectedOptionId === currentQuestion.correctOptionId;

  const handleOptionClick = (optionId: string) => {
    if (isSubmitted) return;
    setSelectedOptionId(optionId);
    setIsSubmitted(true);
    const isCorrectAnswer = optionId === currentQuestion.correctOptionId;
    setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: optionId }));

    if (isCorrectAnswer) {
      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          handleNext();
        } else {
          setShowResults(true);
        }
      }, 1000);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      const nextAnswer = userAnswers[questions[nextIndex].id];
      setSelectedOptionId(nextAnswer || null);
      setIsSubmitted(!!nextAnswer);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      const prevAnswer = userAnswers[questions[prevIndex].id];
      setSelectedOptionId(prevAnswer || null);
      setIsSubmitted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setUserAnswers({});
    setShowResults(false);
    setShowCover(true);
  };

  const score = useMemo(() => {
    return Object.entries(userAnswers).reduce((acc, [qId, ansId]) => {
      const q = questions.find(q => q.id === parseInt(qId));
      return q?.correctOptionId === ansId ? acc + 1 : acc;
    }, 0);
  }, [userAnswers]);

  if (showCover) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4 font-sans">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-16 max-w-2xl w-full border border-stone-200 text-center"
        >
          <div className="mb-8 inline-flex p-5 bg-stone-900 rounded-3xl">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-black text-stone-900 mb-4 tracking-tight">小托福语用模拟考试</h1>
          <p className="text-stone-500 text-lg mb-10 leading-relaxed">
            本测试包含 40 道语用选择题，涵盖图书馆、运动会、会议及作业四大校园场景。
            旨在帮助你巩固语法结构、逻辑衔接与词汇搭配。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-10">
            <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-100">
              <div className="mt-1 p-1 bg-emerald-100 text-emerald-600 rounded-md">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-stone-800">即时反馈</h3>
                <p className="text-sm text-stone-500">点击选项即刻提交，查看详细解析。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-100">
              <div className="mt-1 p-1 bg-blue-100 text-blue-600 rounded-md">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-stone-800">深度解析</h3>
                <p className="text-sm text-stone-500">包含语法规则说明与错误选项改写。</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setShowCover(false)}
            className="group w-full py-5 bg-stone-900 text-white rounded-2xl font-bold text-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-stone-200"
          >
            开始测试
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4 font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center border border-stone-200"
        >
          <div className="mb-6 inline-flex p-4 bg-emerald-50 rounded-full">
            <Trophy className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-stone-900 mb-2">测试完成！</h1>
          <p className="text-stone-500 mb-8">你已经完成了所有 40 道语用选择题。</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
              <div className="text-sm text-stone-400 uppercase tracking-wider font-semibold mb-1">正确率</div>
              <div className="text-3xl font-bold text-stone-900">{Math.round((score / questions.length) * 100)}%</div>
            </div>
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
              <div className="text-sm text-stone-400 uppercase tracking-wider font-semibold mb-1">得分</div>
              <div className="text-3xl font-bold text-stone-900">{score} / {questions.length}</div>
            </div>
          </div>

          <button 
            onClick={resetQuiz}
            className="w-full py-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            重新开始
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-200">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-stone-900 rounded-xl">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">小托福语用模拟</h1>
            <p className="text-xs text-stone-400 font-medium uppercase tracking-widest">TOEFL Junior Practice</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">进度</span>
            <span className="text-sm font-bold">{currentIndex + 1} / {questions.length}</span>
          </div>
          <div className="w-24 h-2 bg-stone-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-stone-900"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Scenario Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-stone-100 rounded-full w-fit">
              {SCENARIO_ICONS[currentQuestion.scenario]}
              <span className="text-sm font-bold text-stone-600 uppercase tracking-wide">
                {SCENARIO_LABELS[currentQuestion.scenario]}
              </span>
            </div>

            {/* Question Text */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-stone-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-stone-900" />
              <div className="text-xl md:text-2xl leading-relaxed font-medium text-stone-800">
                {currentQuestion.textBefore}{' '}
                <span className={`inline-block border-b-2 min-w-[120px] text-center transition-all duration-300 ${
                  isSubmitted 
                    ? isCorrect 
                      ? 'border-emerald-500 text-emerald-600' 
                      : 'border-rose-500 text-rose-600'
                    : 'border-stone-900 text-stone-900'
                }`}>
                  {isSubmitted ? currentQuestion.options.find(o => o.id === selectedOptionId)?.text : '\u00A0'}
                </span>{' '}
                {currentQuestion.textAfter}
              </div>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedOptionId === option.id;
                const isCorrectOption = option.id === currentQuestion.correctOptionId;
                
                let buttonClass = "flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-200 text-left group ";
                
                if (isSubmitted) {
                  if (isCorrectOption) {
                    buttonClass += "bg-emerald-50 border-emerald-500 text-emerald-900";
                  } else if (isSelected) {
                    buttonClass += "bg-rose-50 border-rose-500 text-rose-900";
                  } else {
                    buttonClass += "bg-white border-stone-100 text-stone-400 opacity-50";
                  }
                } else {
                  if (isSelected) {
                    buttonClass += "bg-stone-900 border-stone-900 text-white shadow-lg shadow-stone-200";
                  } else {
                    buttonClass += "bg-white border-stone-200 text-stone-700 hover:border-stone-400 hover:bg-stone-50";
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.id)}
                    disabled={isSubmitted}
                    className={buttonClass}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm transition-colors ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-500 group-hover:bg-stone-200'
                      }`}>
                        {option.id}
                      </span>
                      <span className="font-semibold">{option.text}</span>
                    </div>
                    {isSubmitted && isCorrectOption && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                    {isSubmitted && isSelected && !isCorrectOption && <XCircle className="w-5 h-5 text-rose-600" />}
                  </button>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-start pt-4">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-stone-500 hover:bg-stone-100 disabled:opacity-0 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
                上一题
              </button>
            </div>

            {/* Explanation Card */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className={`mt-8 p-8 rounded-[2rem] border-2 ${
                    isCorrect ? 'bg-emerald-50/50 border-emerald-100' : 'bg-rose-50/50 border-rose-100'
                  }`}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-2xl ${isCorrect ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                        <Info className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">详解卡片</h3>
                        <p className={`text-sm font-bold uppercase tracking-widest ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {isCorrect ? '回答正确' : '回答错误'} • {currentQuestion.grammarPoint}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <section>
                        <h4 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">解析说明</h4>
                        <p className="text-stone-700 leading-relaxed">{currentQuestion.generalExplanation}</p>
                      </section>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <section className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                          <h4 className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Check className="w-4 h-4" /> 正确答案: {currentQuestion.correctOptionId}
                          </h4>
                          <p className="text-stone-600 text-sm italic mb-2">
                            "{currentQuestion.options.find(o => o.id === currentQuestion.correctOptionId)?.explanation}"
                          </p>
                          <div className="p-3 bg-stone-50 rounded-xl text-sm font-mono text-stone-500">
                            {currentQuestion.options.find(o => o.id === currentQuestion.correctOptionId)?.rewrite}
                          </div>
                        </section>

                        {!isCorrect && selectedOptionId && (
                          <section className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                            <h4 className="text-sm font-bold text-rose-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                              <X className="w-4 h-4" /> 你的选择: {selectedOptionId}
                            </h4>
                            <p className="text-stone-600 text-sm italic mb-2">
                              "{currentQuestion.options.find(o => o.id === selectedOptionId)?.explanation}"
                            </p>
                            <div className="p-3 bg-stone-50 rounded-xl text-sm font-mono text-stone-500">
                              <span className="text-rose-400 line-through mr-2">错误用法</span>
                              {currentQuestion.options.find(o => o.id === selectedOptionId)?.rewrite}
                            </div>
                          </section>
                        )}
                      </div>

                      <div className="pt-6 border-t border-stone-200/50 flex justify-end">
                        <button
                          onClick={handleNext}
                          className="px-10 py-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-all shadow-xl shadow-stone-200 flex items-center gap-2"
                        >
                          {currentIndex === questions.length - 1 ? '查看结果' : '下一题'}
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Info */}
      <footer className="max-w-4xl mx-auto px-6 py-12 text-center text-stone-400">
        <p className="text-sm">© 2026 小托福语用模拟考试系统 • 助力语言能力提升</p>
      </footer>
    </div>
  );
}
