import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "mm-theme"

function readStoredTheme() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored === 'dark' || stored === 'light' ? stored : null;
    } catch {
        return null;
    }
}
