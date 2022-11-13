#!/usr/bin/env node

// Helper imports
import { getStubsConfig } from "~/utils/getStubsConfig";
import { log } from "~/utils/log";

// Read stubs.config.js
const config = getStubsConfig();

if (!config) {
    console.error("No stubs config found.");
    process.exit(1);
}

log.info("Stubs config found.");

// Get the stubs directory
const stubsDirectory = config.stubsDirectory;

console.log(stubsDirectory);
