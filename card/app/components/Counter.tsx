"use client";
import React, { useState, useEffect, useRef } from 'react';
import settingsIcon from '@/public/settings.svg';
// @ts-ignore
// import useSound from 'use-sound';
// @ts-ignore
// import notification from '@/public/notification.mp3';
// @ts-ignore
import click from '@/public/click.mp3';

type Modes = "work" | "break";

const PomodoroTimer = () => {
    const [mode, setMode] = useState<Modes>("work");
    const [workTime, setWorkTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [numberOfPomodoros, setNumberOfPomodoros] = useState(3);
    const [timeLeft, setTimeLeft] = useState(workTime * 60);
    const [isPaused, setIsPaused] = useState(true);
    const [pomodoroCount, setPomodoroCount] = useState(0);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isTutorialOpen, setIsTutorialOpen] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const lastTickRef = useRef(Date.now());

    // const [finish] = useSound(notification, { volume: 0.15 });
    // const [clickSound] = useSound(click, { volume: 0.15 });

    useEffect(() => {
        setIsTutorialOpen(!isTutorialOpen);
    }, []);

    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                const now = Date.now();
                const elapsed = (now - lastTickRef.current) / 1000; // convert ms to seconds
                lastTickRef.current = now;

                setTimeLeft((prevTime) => {
                    const newTimeLeft = prevTime - elapsed;
                    if (newTimeLeft <= 0) {
                        clearInterval(intervalRef.current!);
                        handleTimerEnd();
                        return 0;
                    }
                    return newTimeLeft;
                });
            }, 1000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused]);

    useEffect(() => {
        setTimeLeft(mode === "work" ? workTime * 60 : breakTime * 60);
    }, [mode, workTime, breakTime]);

    useEffect(() => {
        toggleTimer();
    }, []);

    const handleTimerEnd = () => {
        // showNotification(mode);
        // finish();
        if (mode === "work") {
            setPomodoroCount(pomodoroCount + 1);
            if (pomodoroCount + 1 >= numberOfPomodoros) {
                setPomodoroCount(0); // Reset count after completing all pomodoros
            }
            setMode("break");
            setTimeLeft(breakTime * 60);
        } else {
            setMode("work");
            setTimeLeft(workTime * 60);
        }
        setIsPaused(true); // Pause automatically after a cycle
    };

    const formatTime = (time: number, isMinutes = true) => {
        if (isMinutes) {
            return Math.floor(time / 60);
        } else {
            return Math.floor(time % 60);
        }
    };

    const toggleTimer = () => {
        // clickSound();
        setIsPaused(!isPaused);
        if (isPaused) lastTickRef.current = Date.now();
    };

    const Reset = () => {
        // clickSound();
        if (intervalRef.current) clearInterval(intervalRef.current);
        setMode("work");
        setTimeLeft(workTime * 60);
        setIsPaused(true);
    };

    return (
        <>
            <div className="grid grid-flow-col gap-2 text-center auto-cols-max">
                <div className="flex flex-col p-4 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-3xl">
                        <span style={{ '--value': formatTime(timeLeft) } as React.CSSProperties}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-4 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-3xl">
                        <span style={{ '--value': formatTime(timeLeft, false) } as React.CSSProperties}></span>
                    </span>
                    sec
                </div>
            </div>
        </>
    );
};

export default PomodoroTimer;
