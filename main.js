const CONFIG = {
  chunkSize: 960,
  activeChunkRadius: 1,
  roadWidth: 96,
  sidewalkWidth: 18,
  civilianVision: 250,
  policeVision: 360,
  policeGunRange: 165,
  policeDesiredRange: 190,
  policeBossVision: 620,
  policeBossSpawnConsumed: 50,
  policeBossSpawnKills: 20,
  policeBossHealth: 160,
  policeBossSearchSpeed: 8.8,
  policeBossMotorcycleSpeed: 10.6,
  policeBossDesiredRange: 325,
  policeBossTooCloseRange: 210,
  policeBossDisengageTime: 7.4,
  policeBossRetreatDistance: 780,
  policeBossShotCooldown: 5,
  policeBossShotgunPellets: 5,
  policeBossPelletDamage: 10,
  policeBossCircleSpeed: 2.8,
  policeBossReinforcementHealthThreshold: 0.72,
  policeBossReinforcementCooldown: 6.5,
  policeBossMaxReinforcementCalls: 3,
  civilianSpeed: 0.8,
  civilianFleeSpeed: 2.25,
  policePatrolSpeed: 1.15,
  policeChaseSpeed: 1.95,
  mouseSeekBase: 0.0081,
  mouseSeekGrowth: 0.0022,
  playerDrag: 0.88,
  playerMaxSpeedBase: 1.82,
  playerMaxSpeedGrowth: 0.14,
  playerRadiusBase: 12,
  playerRadiusGrowth: 1.12,
  followerSpring: 0.1,
  followerDrag: 0.9,
  followerMaxSpeed: 8.8,
  absorbRangeBase: 20,
  absorbRangeGrowth: 0.5,
  biomatterPerHuman: 3,
  alertDecayPerSecond: 5.5,
  policeSpawnThreshold: 22,
  policeSpawnCooldown: 4.5,
  militarySpawnCooldown: 3.2,
  militaryBossSpawnConsumed: 68,
  militaryBossSpawnKills: 25,
  militaryBossHealth: 320,
  militaryBossWalkSpeed: 1.42,
  militaryBossSearchSpeed: 1.18,
  militaryBossChargeSpeed: 8.6,
  militaryBossRetreatSpeed: 4.9,
  militaryBossVision: 500,
  militaryBossJumpCooldown: 8.4,
  militaryBossChargeCooldown: 8.8,
  militaryBossChargeWindup: 2,
  militaryBossRetreatDistance: 760,
  militaryBossReinforcementCooldown: 10.5,
  militaryBossSlamRadius: 128,
  militaryBossRocketRangeMin: 290,
  militaryBossMinigunRange: 340,
  militaryBossFlameRange: 185,
  militaryBossChainsawRange: 96,
  damagePerShot: 8,
  shotCooldown: 1.1,
  tracerLifetime: 0.16,
  explosionLifetime: 0.55,
  soldierVision: 400,
  soldierRange: 285,
  soldierSpeed: 1.85,
  soldierDamage: 16,
  soldierShotCooldown: 0.48,
  grenadierRange: 300,
  grenadierCooldown: 2.4,
  grenadeSpeed: 4.2,
  grenadeDamage: 28,
  grenadeBlastRadius: 88,
  tankVision: 460,
  tankRange: 320,
  tankSpeed: 0.72,
  tankDamage: 24,
  tankShotCooldown: 2.8,
  tankShellSpeed: 5.2,
  tankBlastRadius: 70,
  helicopterVision: 560,
  helicopterRange: 340,
  helicopterSpeed: 2.7,
  helicopterDamage: 3.5,
  helicopterShotCooldown: 0.12,
  ciaSpawnCooldown: 7.2,
  ciaVision: 560,
  ciaCarRange: 560,
  ciaFootRange: 460,
  ciaCarSpeed: 3.35,
  ciaFootSpeed: 2.35,
  ciaDamage: 19,
  ciaShotCooldown: 0.24,
  ciaBossSpawnConsumed: 84,
  ciaBossSpawnKills: 16,
  ciaWormUndergroundSpeed: 10.8,
  ciaWormSurfaceSpeed: 12.4,
  ciaWormHoleLifetime: 999999,
  ciaWormBreachRadius: 220,
  ciaWormBodyRadius: 150,
  ciaWormQuakeStrength: 1.2,
  militaryBaseCannonRange: 430,
  militaryBaseMinigunRange: 320,
  militaryBaseCannonCooldown: 2.6,
  militaryBaseMinigunCooldown: 0.16,
  ciaBaseKillRadius: 210,
  ciaBaseBombCooldown: 10,
  alienSpawnCooldown: 5.8,
  alienVision: 620,
  alienBombRange: Infinity,
  alienLaserRange: Infinity,
  alienMinigunRange: Infinity,
  alienBombCooldown: 2.6,
  alienLaserCooldown: 1.5,
  alienMinigunCooldown: 0.13,
  alienTrapCooldown: 5.4,
  alienBombDamage: 22,
  alienLaserDamage: 11,
  alienMinigunDamage: 3.8,
  trapLifetime: 18,
  gasLifetime: 8,
  structureHitCooldown: 0.12,
  debrisLifetime: 2.8,
  debrisGravity: 0.16,
  maxDebrisPieces: 280,
  dayNightDuration: 96,
  followerRadius: 4.2,
  bodyLinkAlpha: 0.12,
  maxBloodDecals: 360,
};

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const menuScreen = document.getElementById("menuScreen");
const playButton = document.getElementById("playButton");
const sandboxButton = document.getElementById("sandboxButton");
const sandboxPanel = document.getElementById("sandboxPanel");
const sandboxCloseButton = document.getElementById("sandboxCloseButton");
const sandboxStructuresTab = document.getElementById("sandboxStructuresTab");
const sandboxEnemiesTab = document.getElementById("sandboxEnemiesTab");
const sandboxSpawnList = document.getElementById("sandboxSpawnList");
const sandboxSizeValue = document.getElementById("sandboxSizeValue");
const sandboxPlacementLabel = document.getElementById("sandboxPlacementLabel");
const sandboxSizeDownSmall = document.getElementById("sandboxSizeDownSmall");
const sandboxSizeDownLarge = document.getElementById("sandboxSizeDownLarge");
const sandboxSizeUpSmall = document.getElementById("sandboxSizeUpSmall");
const sandboxSizeUpLarge = document.getElementById("sandboxSizeUpLarge");
const resetButton = document.getElementById("resetButton");
const menuButton = document.getElementById("menuButton");
const particleCountLabel = document.getElementById("particleCount");

const state = {
  width: 0,
  height: 0,
  pointer: { x: 0, y: 0, active: false },
  player: {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    radius: CONFIG.playerRadiusBase,
    health: 100,
    maxHealth: 100,
    absorbedHumans: 0,
    followers: [],
    lastDirX: 1,
    lastDirY: 0,
    morphName: "seed",
    slimeTimer: 0,
    bloodTimer: 0,
  },
  world: {
    chunks: new Map(),
    npcs: [],
    nextNpcId: 1,
    alert: 0,
    tracers: [],
    projectiles: [],
    explosions: [],
    debris: [],
    traps: [],
    blood: [],
    policeSpawnCooldown: 0,
    militarySpawnCooldown: 0,
    ciaSpawnCooldown: 0,
    alienSpawnCooldown: 0,
    playerSlowFactor: 1,
    policeDeathsTotal: 0,
    policeBossSpawned: false,
    militaryDeathsTotal: 0,
    militaryBossSpawned: false,
    ciaDeathsTotal: 0,
    ciaBossSpawned: false,
    ciaWorm: null,
  },
  camera: {
    focusX: null,
    focusY: null,
    shakeX: 0,
    shakeY: 0,
  },
  audio: {
    ctx: null,
    master: null,
    noiseBuffer: null,
    ambientStarted: false,
  },
  time: 0,
  lastTime: 0,
  animationId: 0,
  gameOver: false,
  gameStarted: false,
  gameMode: "town",
  sandbox: {
    menuOpen: false,
    category: "structures",
    placement: null,
    arenaRadiusChunks: 2,
  },
};

const SANDBOX_STRUCTURE_OPTIONS = [
  { id: "home", label: "Home" },
  { id: "apartments", label: "Apartments" },
  { id: "marketHall", label: "Market Hall" },
  { id: "policeStation", label: "Police Station" },
  { id: "militaryBase", label: "Military Base" },
  { id: "ciaBase", label: "CIA Base" },
  { id: "park", label: "Park" },
  { id: "tree", label: "Tree" },
  { id: "lamp", label: "Lamp" },
  { id: "civilianCar", label: "Civilian Car" },
];

const SANDBOX_ENEMY_OPTIONS = [
  { id: "police", label: "Police Officer" },
  { id: "policeSquad", label: "Police Squad" },
  { id: "policeBoss", label: "Police Mini Boss" },
  { id: "militarySoldier", label: "Army Soldier" },
  { id: "militaryGrenadier", label: "Grenade Soldier" },
  { id: "militaryBoss", label: "Military Boss" },
  { id: "tank", label: "Tank" },
  { id: "helicopter", label: "Helicopter" },
  { id: "ciaSquad", label: "CIA Squad" },
  { id: "ciaBoss", label: "CIA Worm" },
  { id: "alien", label: "Alien Ship" },
  { id: "alienWing", label: "Alien Wing" },
];

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function hash2d(x, y) {
  let h = x * 374761393 + y * 668265263;
  h = (h ^ (h >> 13)) * 1274126177;
  return (h ^ (h >> 16)) >>> 0;
}

function mulberry32(seed) {
  let value = seed >>> 0;
  return function next() {
    value += 0x6d2b79f5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function randomBetween(rng, min, max) {
  return min + rng() * (max - min);
}

function randomInt(rng, min, max) {
  return Math.floor(randomBetween(rng, min, max + 1));
}

function getSandboxOptions() {
  return state.sandbox.category === "structures" ? SANDBOX_STRUCTURE_OPTIONS : SANDBOX_ENEMY_OPTIONS;
}

function setSandboxPlacement(id) {
  state.sandbox.placement = id;
  updateSandboxUi();
}

function openSandboxMenu() {
  if (state.gameMode !== "sandbox") {
    return;
  }
  state.sandbox.menuOpen = true;
  sandboxPanel.classList.remove("hidden");
  updateSandboxUi();
}

function closeSandboxMenu() {
  state.sandbox.menuOpen = false;
  sandboxPanel.classList.add("hidden");
}

function updateSandboxUi() {
  if (!sandboxPanel) {
    return;
  }

  const allOptions = [...SANDBOX_STRUCTURE_OPTIONS, ...SANDBOX_ENEMY_OPTIONS];
  const placementOption = allOptions.find((option) => option.id === state.sandbox.placement);
  sandboxPanel.classList.toggle("hidden", !(state.gameStarted && state.gameMode === "sandbox" && state.sandbox.menuOpen));
  sandboxStructuresTab.classList.toggle("active", state.sandbox.category === "structures");
  sandboxEnemiesTab.classList.toggle("active", state.sandbox.category === "enemies");
  sandboxSizeValue.textContent = `Consumed ${state.player.absorbedHumans}`;
  sandboxPlacementLabel.textContent = placementOption ? `Placing: ${placementOption.label}` : "No placement selected.";

  const options = getSandboxOptions();
  if (sandboxSpawnList.dataset.category !== state.sandbox.category || sandboxSpawnList.childElementCount !== options.length) {
    sandboxSpawnList.dataset.category = state.sandbox.category;
    sandboxSpawnList.innerHTML = "";
    for (const option of options) {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.id = option.id;
      button.textContent = option.label;
      button.addEventListener("click", () => {
        setSandboxPlacement(option.id);
        closeSandboxMenu();
      });
      sandboxSpawnList.appendChild(button);
    }
  }

  for (const button of sandboxSpawnList.children) {
    button.classList.toggle("active", button.dataset.id === state.sandbox.placement);
  }
}

function distanceBetween(ax, ay, bx, by) {
  return Math.hypot(bx - ax, by - ay);
}

function distanceToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lengthSq = dx * dx + dy * dy || 0.0001;
  const t = clamp(((px - x1) * dx + (py - y1) * dy) / lengthSq, 0, 1);
  const nearestX = x1 + dx * t;
  const nearestY = y1 + dy * t;
  return distanceBetween(px, py, nearestX, nearestY);
}

function circleIntersectsRect(x, y, radius, rect) {
  const nearestX = clamp(x, rect.x, rect.x + rect.w);
  const nearestY = clamp(y, rect.y, rect.y + rect.h);
  return distanceBetween(x, y, nearestX, nearestY) <= radius;
}

function getDayNightState() {
  const cycle = (state.time % CONFIG.dayNightDuration) / CONFIG.dayNightDuration;
  const daylight = 0.5 - Math.cos(cycle * Math.PI * 2) * 0.5;
  const darkness = clamp(1 - daylight, 0, 1);
  let label = "Night";
  if (cycle > 0.16 && cycle < 0.34) {
    label = "Dawn";
  } else if (cycle >= 0.34 && cycle <= 0.66) {
    label = "Day";
  } else if (cycle > 0.66 && cycle < 0.84) {
    label = "Dusk";
  }
  return { cycle, daylight, darkness, label };
}

function getPlayerGrowthStats() {
  const size = state.player.absorbedHumans;
  return {
    maxHealth: 100 + size * 4 + Math.sqrt(size) * 10,
    destruction: 1 + size * 0.12 + Math.sqrt(size + 1) * 0.45,
  };
}

function getChunkAtPosition(x, y) {
  return state.world.chunks.get(chunkKey(Math.floor(x / CONFIG.chunkSize), Math.floor(y / CONFIG.chunkSize))) || null;
}

function spawnVisualBurst(x, y, radius, color) {
  state.world.explosions.push({
    x,
    y,
    radius,
    life: 0.28,
    maxLife: 0.28,
    color,
  });
}

function createNoiseBuffer(audioContext) {
  const buffer = audioContext.createBuffer(1, audioContext.sampleRate, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  for (let index = 0; index < data.length; index += 1) {
    data[index] = Math.random() * 2 - 1;
  }
  return buffer;
}

function ensureAudio() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) {
    return null;
  }

  if (!state.audio.ctx) {
    const audioContext = new AudioCtor();
    const master = audioContext.createGain();
    master.gain.value = 0.34;
    master.connect(audioContext.destination);
    state.audio.ctx = audioContext;
    state.audio.master = master;
    state.audio.noiseBuffer = createNoiseBuffer(audioContext);
  }

  if (state.audio.ctx.state === "suspended") {
    state.audio.ctx.resume();
  }

  if (!state.audio.ambientStarted) {
    startAmbientAudio();
  }

  return state.audio.ctx;
}

function playOscillatorSound(options) {
  const audioContext = ensureAudio();
  if (!audioContext || !state.audio.master) {
    return;
  }

  const {
    type = "sine",
    frequency = 220,
    endFrequency = frequency,
    duration = 0.18,
    gain = 0.05,
    attack = 0.01,
    release = 0.12,
    detune = 0,
  } = options;

  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const output = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  oscillator.frequency.exponentialRampToValueAtTime(Math.max(1, endFrequency), now + duration);
  oscillator.detune.value = detune;

  output.gain.setValueAtTime(0.0001, now);
  output.gain.linearRampToValueAtTime(gain, now + attack);
  output.gain.exponentialRampToValueAtTime(0.0001, now + Math.max(duration, attack + release));

  oscillator.connect(output);
  output.connect(state.audio.master);
  oscillator.start(now);
  oscillator.stop(now + duration + release + 0.05);
}

function playNoiseBurst(options) {
  const audioContext = ensureAudio();
  if (!audioContext || !state.audio.master || !state.audio.noiseBuffer) {
    return;
  }

  const {
    duration = 0.18,
    gain = 0.04,
    attack = 0.005,
    release = 0.12,
    frequency = 900,
    q = 1.3,
    filterType = "bandpass",
    playbackRate = 1,
  } = options;

  const now = audioContext.currentTime;
  const source = audioContext.createBufferSource();
  source.buffer = state.audio.noiseBuffer;
  source.loop = false;
  source.playbackRate.value = playbackRate;

  const filter = audioContext.createBiquadFilter();
  filter.type = filterType;
  filter.frequency.value = frequency;
  filter.Q.value = q;

  const output = audioContext.createGain();
  output.gain.setValueAtTime(0.0001, now);
  output.gain.linearRampToValueAtTime(gain, now + attack);
  output.gain.exponentialRampToValueAtTime(0.0001, now + duration + release);

  source.connect(filter);
  filter.connect(output);
  output.connect(state.audio.master);
  source.start(now);
  source.stop(now + duration + release + 0.05);
}

function startAmbientAudio() {
  const audioContext = state.audio.ctx;
  if (!audioContext || !state.audio.master || state.audio.ambientStarted || !state.audio.noiseBuffer) {
    return;
  }

  const drone = audioContext.createOscillator();
  const droneGain = audioContext.createGain();
  drone.type = "triangle";
  drone.frequency.value = 52;
  droneGain.gain.value = 0.01;
  drone.connect(droneGain);
  droneGain.connect(state.audio.master);
  drone.start();

  const wind = audioContext.createBufferSource();
  const windFilter = audioContext.createBiquadFilter();
  const windGain = audioContext.createGain();
  wind.buffer = state.audio.noiseBuffer;
  wind.loop = true;
  wind.playbackRate.value = 0.34;
  windFilter.type = "lowpass";
  windFilter.frequency.value = 420;
  windGain.gain.value = 0.018;
  wind.connect(windFilter);
  windFilter.connect(windGain);
  windGain.connect(state.audio.master);
  wind.start();

  const hum = audioContext.createOscillator();
  const humGain = audioContext.createGain();
  hum.type = "sine";
  hum.frequency.value = 134;
  humGain.gain.value = 0.006;
  hum.connect(humGain);
  humGain.connect(state.audio.master);
  hum.start();

  state.audio.ambientStarted = true;
}

function playSlimeSound(intensity = 1) {
  const clamped = clamp(intensity, 0.4, 2.4);
  playOscillatorSound({
    type: "triangle",
    frequency: 150 * clamped,
    endFrequency: 72,
    duration: 0.14 + clamped * 0.035,
    gain: 0.044 + clamped * 0.014,
    release: 0.16,
    detune: -180,
  });
  playNoiseBurst({
    duration: 0.08 + clamped * 0.03,
    gain: 0.024 + clamped * 0.009,
    frequency: 720,
    q: 0.8,
    filterType: "lowpass",
    playbackRate: 0.7,
  });
}

function playScreamSound(intensity = 1) {
  const clamped = clamp(intensity, 0.5, 1.8);
  playOscillatorSound({
    type: "sawtooth",
    frequency: 520 + clamped * 180,
    endFrequency: 260,
    duration: 0.28,
    gain: 0.03 + clamped * 0.016,
    attack: 0.008,
    release: 0.22,
    detune: (Math.random() - 0.5) * 260,
  });
  playNoiseBurst({
    duration: 0.16,
    gain: 0.022 + clamped * 0.012,
    frequency: 1700,
    q: 1.9,
    filterType: "bandpass",
    playbackRate: 1.15,
  });
}

function playRunSound(intensity = 1) {
  const clamped = clamp(intensity, 0.4, 1.6);
  playNoiseBurst({
    duration: 0.05,
    gain: 0.014 + clamped * 0.008,
    frequency: 260,
    q: 0.75,
    filterType: "lowpass",
    playbackRate: 0.85,
  });
  playOscillatorSound({
    type: "sine",
    frequency: 92,
    endFrequency: 52,
    duration: 0.06,
    gain: 0.01 + clamped * 0.006,
    attack: 0.004,
    release: 0.05,
  });
}

function playAssimilationSound(intensity = 1) {
  const clamped = clamp(intensity, 0.7, 2);
  playOscillatorSound({
    type: "triangle",
    frequency: 210,
    endFrequency: 58,
    duration: 0.22 + clamped * 0.05,
    gain: 0.042 + clamped * 0.016,
    attack: 0.006,
    release: 0.22,
    detune: -260,
  });
  playNoiseBurst({
    duration: 0.14,
    gain: 0.028 + clamped * 0.012,
    frequency: 540,
    q: 0.9,
    filterType: "lowpass",
    playbackRate: 0.62,
  });
}

function chunkKey(cx, cy) {
  return `${cx},${cy}`;
}

function getChunkCoords(x, y) {
  return { cx: Math.floor(x / CONFIG.chunkSize), cy: Math.floor(y / CONFIG.chunkSize) };
}

function getCamera() {
  const baseX = state.camera.focusX == null ? state.player.x : state.camera.focusX;
  const baseY = state.camera.focusY == null ? state.player.y : state.camera.focusY;
  return {
    x: baseX + state.camera.shakeX,
    y: baseY + state.camera.shakeY,
  };
}

function worldToScreen(x, y) {
  const camera = getCamera();
  return { x: x - camera.x + state.width * 0.5, y: y - camera.y + state.height * 0.5 };
}

function screenToWorld(x, y) {
  return { x: state.player.x + x - state.width * 0.5, y: state.player.y + y - state.height * 0.5 };
}

function pointInRect(x, y, rect, padding = 0) {
  return x >= rect.x - padding && x <= rect.x + rect.w + padding && y >= rect.y - padding && y <= rect.y + rect.h + padding;
}

function segmentIntersectsRect(x1, y1, x2, y2, rect, samples = 18) {
  const minX = Math.min(x1, x2);
  const maxX = Math.max(x1, x2);
  const minY = Math.min(y1, y2);
  const maxY = Math.max(y1, y2);
  if (maxX < rect.x || minX > rect.x + rect.w || maxY < rect.y || minY > rect.y + rect.h) {
    return false;
  }

  for (let step = 0; step <= samples; step += 1) {
    const t = step / samples;
    if (pointInRect(lerp(x1, x2, t), lerp(y1, y2, t), rect, 2)) {
      return true;
    }
  }
  return false;
}

function getLoadedChunks() {
  return Array.from(state.world.chunks.values());
}

function getLoadedBuildings() {
  const buildings = [];
  for (const chunk of state.world.chunks.values()) {
    for (const building of chunk.buildings) {
      if (!building.destroyed && !building.falling) {
        buildings.push(building);
      }
    }
  }
  return buildings;
}

function pushCircleOutOfRect(entity, radius, rect) {
  const nearestX = clamp(entity.x, rect.x, rect.x + rect.w);
  const nearestY = clamp(entity.y, rect.y, rect.y + rect.h);
  const dx = entity.x - nearestX;
  const dy = entity.y - nearestY;
  const distance = Math.hypot(dx, dy);

  if (distance > 0 && distance < radius) {
    const overlap = radius - distance;
    entity.x += (dx / distance) * overlap;
    entity.y += (dy / distance) * overlap;
    return;
  }

  if (distance === 0 && pointInRect(entity.x, entity.y, rect)) {
    const left = Math.abs(entity.x - rect.x);
    const right = Math.abs(rect.x + rect.w - entity.x);
    const top = Math.abs(entity.y - rect.y);
    const bottom = Math.abs(rect.y + rect.h - entity.y);
    const min = Math.min(left, right, top, bottom);

    if (min === left) {
      entity.x = rect.x - radius;
    } else if (min === right) {
      entity.x = rect.x + rect.w + radius;
    } else if (min === top) {
      entity.y = rect.y - radius;
    } else {
      entity.y = rect.y + rect.h + radius;
    }
  }
}

function resolveEntityAgainstBuildings(entity, radius) {
  for (const building of getLoadedBuildings()) {
    if (
      entity.x + radius < building.x ||
      entity.x - radius > building.x + building.w ||
      entity.y + radius < building.y ||
      entity.y - radius > building.y + building.h
    ) {
      continue;
    }
    pushCircleOutOfRect(entity, radius, building);
  }
}

function resolveEntityAgainstCIAWormHoles(entity, radius) {
  const worm = state.world.ciaWorm;
  if (!worm) {
    return;
  }
  for (const hole of worm.holes) {
    const dx = entity.x - hole.x;
    const dy = entity.y - hole.y;
    const ellipseFactor = 0.72;
    const scaledDistance = Math.hypot(dx, dy / ellipseFactor) || 0.0001;
    const safeRadius = hole.radius + radius;
    if (scaledDistance >= safeRadius) {
      continue;
    }
    const overlap = safeRadius - scaledDistance;
    entity.x += (dx / scaledDistance) * overlap;
    entity.y += ((dy / ellipseFactor) / scaledDistance) * overlap * ellipseFactor;
  }
}

function lineOfSightBlocked(x1, y1, x2, y2) {
  for (const building of getLoadedBuildings()) {
    if (segmentIntersectsRect(x1, y1, x2, y2, building)) {
      return true;
    }
  }
  return false;
}

function spawnBloodStamp(x, y, size, amount = 1, smearX = 0, smearY = 0) {
  const drops = Math.min(2, Math.max(1, Math.round(amount)));
  for (let index = 0; index < drops; index += 1) {
    const spread = size * (0.65 + Math.random() * 0.85);
    const alpha = 0.05 + Math.random() * 0.08;
    const life = 10 + Math.random() * 9;
    state.world.blood.push({
      x: x + (Math.random() - 0.5) * spread,
      y: y + (Math.random() - 0.5) * spread,
      radius: size * (0.32 + Math.random() * 0.85),
      alpha,
      baseAlpha: alpha,
      smearX: smearX * (0.15 + Math.random() * 0.5),
      smearY: smearY * (0.15 + Math.random() * 0.5),
      rotation: Math.random() * Math.PI * 2,
      life,
      maxLife: life,
    });
  }

  if (state.world.blood.length > CONFIG.maxBloodDecals) {
    state.world.blood.splice(0, state.world.blood.length - CONFIG.maxBloodDecals);
  }
}

function updateBlood(dt) {
  for (let index = state.world.blood.length - 1; index >= 0; index -= 1) {
    const stain = state.world.blood[index];
    stain.life -= dt;
    const fade = clamp(stain.life / (stain.maxLife || 1), 0, 1);
    stain.alpha = (stain.baseAlpha || stain.alpha) * fade;
    if (stain.life <= 0 || stain.alpha <= 0.002) {
      state.world.blood.splice(index, 1);
    }
  }
}

function leaveBloodTrail(dt) {
  const movement = Math.hypot(state.player.vx, state.player.vy);
  if (movement < 0.04) {
    state.player.bloodTimer = 0;
    return;
  }
  const sizeFactor = 1 + Math.sqrt(state.player.followers.length) * 0.14;
  state.player.bloodTimer -= dt * (1 + movement * 0.4 + sizeFactor * 0.35);
  if (state.player.bloodTimer > 0) {
    return;
  }

  state.player.bloodTimer = Math.max(0.075, 0.2 - Math.sqrt(state.player.followers.length) * 0.003);
  const mainSmearX = state.player.vx * 3.6;
  const mainSmearY = state.player.vy * 3.6;
  spawnBloodStamp(state.player.x, state.player.y, 5.2 + sizeFactor * 1.1, 1 + Math.floor(sizeFactor * 0.35), mainSmearX, mainSmearY);

  const stride = Math.max(1, Math.ceil(state.player.followers.length / 4));
  for (let index = 0; index < state.player.followers.length; index += stride) {
    const follower = state.player.followers[index];
    const followerSpeed = Math.hypot(follower.vx, follower.vy);
    if (followerSpeed < 0.2) {
      continue;
    }
    const prominence = 1 + sizeFactor * 0.28 + followerSpeed * 0.08;
    spawnBloodStamp(
      follower.x,
      follower.y,
      2.4 + prominence * 0.7,
      1,
      follower.vx * 2.4,
      follower.vy * 2.4,
    );
  }
}

function getNpcSwarmContact(npc) {
  let touchCount = 0;
  let contactX = 0;
  let contactY = 0;
  const coreTouchRadius = npc.radius + state.player.radius * 0.4 + 6;
  if (distanceBetween(npc.x, npc.y, state.player.x, state.player.y) <= coreTouchRadius) {
    touchCount += 1;
    contactX += state.player.x;
    contactY += state.player.y;
  }

  for (const follower of state.player.followers) {
    const threshold = npc.radius + follower.radius + 2;
    if (distanceBetween(npc.x, npc.y, follower.x, follower.y) <= threshold) {
      touchCount += 1;
      contactX += follower.x;
      contactY += follower.y;
    }
  }

  if (!touchCount) {
    return null;
  }

  return {
    touchCount,
    contactX: contactX / touchCount,
    contactY: contactY / touchCount,
  };
}

function dragNpcIntoSwarm(npc, contact, dt) {
  if (!contact) {
    return;
  }

  npc.wasGrabbedBySwarm = true;
  const dx = state.player.x - npc.x;
  const dy = state.player.y - npc.y;
  const distance = Math.hypot(dx, dy) || 0.0001;
  const strength = (0.08 + contact.touchCount * 0.045 + Math.sqrt(state.player.followers.length) * 0.005) * dt * 60;
  npc.vx += (dx / distance) * strength * 6.2;
  npc.vy += (dy / distance) * strength * 6.2;
  npc.vx += (contact.contactX - npc.x) * 0.012 * contact.touchCount;
  npc.vy += (contact.contactY - npc.y) * 0.012 * contact.touchCount;
  npc.vx *= 0.92;
  npc.vy *= 0.92;
  npc.x += npc.vx;
  npc.y += npc.vy;
  resolveEntityAgainstBuildings(npc, npc.radius);

  const smearX = (npc.vx - state.player.vx) * 1.6;
  const smearY = (npc.vy - state.player.vy) * 1.6;
  if (Math.random() < dt * (2.5 + contact.touchCount * 0.18)) {
    spawnBloodStamp(
      lerp(npc.x, state.player.x, 0.3),
      lerp(npc.y, state.player.y, 0.3),
      2.8 + contact.touchCount * 0.45,
      1,
      smearX,
      smearY,
    );
  }

  if (contact.touchCount >= 2 && Math.random() < dt * (0.85 + contact.touchCount * 0.12)) {
    spawnOrganicBurst(
      lerp(npc.x, state.player.x, 0.22),
      lerp(npc.y, state.player.y, 0.22),
      0.7 + contact.touchCount * 0.12,
      smearX,
      smearY,
      { minCount: 1, lifeScale: 0.82 },
    );
  }
}

// SECTION: world generation
function addBuilding(chunk, x, y, w, h, kind, tint) {
  const baseIntegrity =
    kind === "skyscraper" ? 168 :
    kind === "officeTower" ? 148 :
    kind === "ciaBase" ? 165 :
    kind === "militaryBase" ? 155 :
    kind === "policeStation" ? 140 :
    kind === "barn" ? 92 :
    kind === "farmhouse" ? 88 :
    kind === "apartments" ? 120 :
    kind === "marketHall" ? 100 :
    84;
  const threshold =
    kind === "skyscraper" ? 13.2 :
    kind === "officeTower" ? 11.8 :
    kind === "ciaBase" ? 12.8 :
    kind === "militaryBase" ? 12.1 :
    kind === "policeStation" ? 11.5 :
    kind === "barn" ? 8.6 :
    kind === "farmhouse" ? 8.2 :
    kind === "apartments" ? 10.2 :
    kind === "marketHall" ? 9.5 :
    8.4;
  const building = {
    x,
    y,
    w,
    h,
    kind,
    tint,
    destructible: true,
    integrity: baseIntegrity,
    maxIntegrity: baseIntegrity,
    baseIntegrity: baseIntegrity * 0.42,
    maxBaseIntegrity: baseIntegrity * 0.42,
    impactThreshold: threshold,
    lastHitTime: -10,
    falling: false,
    destroyed: false,
    fallAngle: 0,
    fallDirection: 1,
    chipColor: tint || "#bda58b",
  };
  if (kind === "militaryBase") {
    building.cannonCooldown = Math.random() * CONFIG.militaryBaseCannonCooldown;
    building.minigunCooldown = 0;
  }
  if (kind === "ciaBase") {
    building.airstrikeCooldown = 0;
  }
  chunk.buildings.push(building);
}

function addWalkTarget(chunk, x, y) {
  chunk.walkTargets.push({ x, y });
}

function addDeco(chunk, deco) {
  const value = { ...deco, destroyed: false, falling: false, fallAngle: 0, lastHitTime: -10 };
  if (deco.type === "tree") {
    value.destructible = true;
    value.integrity = 46;
    value.maxIntegrity = 46;
    value.impactThreshold = 4.6;
    value.chipColor = "#4e7654";
  } else if (deco.type === "lamp") {
    value.destructible = true;
    value.integrity = 32;
    value.maxIntegrity = 32;
    value.impactThreshold = 3.4;
    value.height = 18;
    value.chipColor = "#7b7e86";
  } else if (deco.type === "policeCar") {
    value.destructible = true;
    value.integrity = 24;
    value.maxIntegrity = 24;
    value.impactThreshold = 2.4;
    value.chipColor = "#243b66";
    value.occupied = false;
  } else if (deco.type === "civilianCar") {
    value.destructible = true;
    value.integrity = 20;
    value.maxIntegrity = 20;
    value.impactThreshold = 2.2;
    value.chipColor = deco.color || "#6a6a6a";
    value.occupied = false;
  } else if (deco.type === "ciaCar") {
    value.destructible = true;
    value.integrity = 22;
    value.maxIntegrity = 22;
    value.impactThreshold = 2.3;
    value.chipColor = "#17181d";
    value.occupied = false;
  } else if (deco.type === "cactus") {
    value.destructible = true;
    value.integrity = 30;
    value.maxIntegrity = 30;
    value.impactThreshold = 3.5;
    value.chipColor = "#5d8a53";
  } else if (deco.type === "tumbleweed") {
    value.destructible = false;
  } else if (deco.type === "flower") {
    value.destructible = false;
  } else if (deco.type === "river" || deco.type === "serviceStop") {
    value.destructible = false;
  }
  chunk.decor.push(value);
}

function addPoliceSpawn(chunk, x, y) {
  chunk.policeSpawns.push({ x, y });
}

function addMilitarySpawn(chunk, x, y) {
  chunk.militarySpawns.push({ x, y });
}

function addCIASpawn(chunk, x, y) {
  chunk.ciaSpawns.push({ x, y });
}

function sampleRectPerimeter(rect, t) {
  const perimeter = rect.w * 2 + rect.h * 2;
  let position = t * perimeter;
  if (position < rect.w) {
    return { x: rect.x + position, y: rect.y };
  }
  position -= rect.w;
  if (position < rect.h) {
    return { x: rect.x + rect.w, y: rect.y + position };
  }
  position -= rect.h;
  if (position < rect.w) {
    return { x: rect.x + rect.w - position, y: rect.y + rect.h };
  }
  position -= rect.w;
  return { x: rect.x, y: rect.y + rect.h - position };
}

function createLot(chunk, rect, type, rng) {
  const pad = 22;

  if (type === "homes") {
    const count = randomInt(rng, 2, 3);
    for (let index = 0; index < count; index += 1) {
      const width = randomBetween(rng, 88, 130);
      const height = randomBetween(rng, 72, 108);
      const x = randomBetween(rng, rect.x + pad, rect.x + rect.w - width - pad);
      const y = randomBetween(rng, rect.y + pad, rect.y + rect.h - height - pad);
      addBuilding(chunk, x, y, width, height, "home", ["#d7b48b", "#bfa27b", "#c7a288"][index % 3]);
      addWalkTarget(chunk, x + width * 0.5, y + height + 18);
      addDeco(chunk, { type: "tree", x: x - 16, y: y + height * 0.5, size: randomBetween(rng, 12, 18) });
    }
    return;
  }

  if (type === "market") {
    addBuilding(chunk, rect.x + 24, rect.y + 24, rect.w - 48, rect.h - 48, "marketHall", "#b98c66");
    for (let index = 0; index < 5; index += 1) {
      const stallX = rect.x + 32 + (index % 2) * 98 + randomBetween(rng, -8, 8);
      const stallY = rect.y + 42 + Math.floor(index / 2) * 82 + randomBetween(rng, -10, 10);
      addDeco(chunk, {
        type: "stall",
        x: stallX,
        y: stallY,
        w: randomBetween(rng, 48, 70),
        h: randomBetween(rng, 32, 44),
        awning: ["#d24b4b", "#d28f4b", "#4b8dd2", "#5eaf63"][index % 4],
      });
      addWalkTarget(chunk, stallX + 26, stallY + 62);
    }
    return;
  }

  if (type === "park") {
    for (let index = 0; index < 5; index += 1) {
      addDeco(chunk, {
        type: "tree",
        x: randomBetween(rng, rect.x + 32, rect.x + rect.w - 32),
        y: randomBetween(rng, rect.y + 32, rect.y + rect.h - 32),
        size: randomBetween(rng, 12, 22),
      });
    }
    addDeco(chunk, { type: "plaza", x: rect.x + rect.w * 0.5 - 34, y: rect.y + rect.h * 0.5 - 34, w: 68, h: 68 });
    addWalkTarget(chunk, rect.x + rect.w * 0.5, rect.y + rect.h * 0.5);
    return;
  }

  if (type === "policeStation") {
    const stationX = rect.x + 42;
    const stationY = rect.y + 40;
    const stationW = rect.w - 84;
    const stationH = rect.h * 0.46;
    addBuilding(chunk, stationX, stationY, stationW, stationH, "policeStation", "#7f95ac");
    addBuilding(chunk, stationX + 24, stationY + 18, stationW - 48, 24, "policeAnnex", "#97abc0");

    const apronY = stationY + stationH + 18;
    addDeco(chunk, { type: "plaza", x: stationX + stationW * 0.5 - 42, y: apronY - 8, w: 84, h: 64 });

    addWalkTarget(chunk, stationX + stationW * 0.5, stationY + stationH + 28);
    addWalkTarget(chunk, stationX + stationW * 0.5, stationY - 12);
    addPoliceSpawn(chunk, stationX + stationW * 0.35, apronY + 30);
    addPoliceSpawn(chunk, stationX + stationW * 0.65, apronY + 30);
    addDeco(chunk, { type: "lamp", x: stationX + 14, y: stationY + stationH + 10 });
    addDeco(chunk, { type: "lamp", x: stationX + stationW - 14, y: stationY + stationH + 10 });
    return;
  }

  if (type === "militaryBase") {
    const baseX = rect.x + 34;
    const baseY = rect.y + 34;
    const baseW = rect.w - 68;
    const baseH = rect.h * 0.52;
    addBuilding(chunk, baseX, baseY, baseW, baseH, "militaryBase", "#7e8a72");
    addBuilding(chunk, baseX + 22, baseY + 20, baseW - 44, 22, "militaryAnnex", "#95a18b");
    addDeco(chunk, { type: "plaza", x: baseX + baseW * 0.5 - 46, y: baseY + baseH + 4, w: 92, h: 62 });
    addWalkTarget(chunk, baseX + baseW * 0.5, baseY + baseH + 28);
    addWalkTarget(chunk, baseX + 26, baseY + baseH + 26);
    addWalkTarget(chunk, baseX + baseW - 26, baseY + baseH + 26);
    addMilitarySpawn(chunk, baseX + 26, baseY + baseH + 22);
    addMilitarySpawn(chunk, baseX + baseW - 26, baseY + baseH + 22);
    addMilitarySpawn(chunk, baseX + baseW * 0.5, baseY + baseH + 22);
    addDeco(chunk, { type: "lamp", x: baseX + 16, y: baseY + baseH + 10 });
    addDeco(chunk, { type: "lamp", x: baseX + baseW - 16, y: baseY + baseH + 10 });
    return;
  }

  if (type === "ciaBase") {
    const baseX = rect.x + 38;
    const baseY = rect.y + 40;
    const baseW = rect.w - 76;
    const baseH = rect.h * 0.44;
    addBuilding(chunk, baseX, baseY, baseW, baseH, "ciaBase", "#5e6067");
    addBuilding(chunk, baseX + 24, baseY + 18, baseW - 48, 20, "ciaAnnex", "#787b84");
    addDeco(chunk, { type: "plaza", x: baseX + baseW * 0.5 - 40, y: baseY + baseH + 6, w: 80, h: 56 });
    addWalkTarget(chunk, baseX + baseW * 0.5, baseY + baseH + 24);
    addCIASpawn(chunk, baseX + baseW * 0.5 - 18, baseY + baseH + 20);
    addCIASpawn(chunk, baseX + baseW * 0.5 + 18, baseY + baseH + 20);
    return;
  }

  addBuilding(chunk, rect.x + 28, rect.y + 28, rect.w - 56, rect.h - 56, "apartments", "#9fa7b3");
  addWalkTarget(chunk, rect.x + rect.w * 0.5, rect.y + rect.h - 18);
  addWalkTarget(chunk, rect.x + rect.w * 0.5, rect.y + 18);
}

function getWorldZone(cx, cy) {
  if (Math.max(Math.abs(cx), Math.abs(cy)) >= 12) {
    return "desert";
  }
  if (Math.abs(cx) <= 2 && Math.abs(cy) <= 2) {
    return "neighborhood";
  }
  if (cx >= 4 && cx <= 7 && Math.abs(cy) <= 2) {
    return "city";
  }
  return "country";
}

function getCountryBiome(cx, cy) {
  return cx >= 8 && Math.abs(cy) <= 3 ? "farm" : "forest";
}

function getCurrentWorldZone() {
  const { cx, cy } = getChunkCoords(state.player.x, state.player.y);
  return getWorldZone(cx, cy);
}

function isEnemySpreadUnlocked(enemy) {
  const size = state.player.absorbedHumans;
  if (enemy === "police") return size >= 18;
  if (enemy === "military") return size >= 30;
  if (enemy === "cia") return size >= 42;
  if (enemy === "alien") return size >= 54;
  return false;
}

function getEnemyStructureSpawnChances(zone) {
  const spread = {
    police: isEnemySpreadUnlocked("police") ? 0.04 : 0,
    military: isEnemySpreadUnlocked("military") ? 0.04 : 0,
    cia: isEnemySpreadUnlocked("cia") ? 0.04 : 0,
  };
  return {
    police: (zone === "neighborhood" ? 0.08 : 0) + spread.police,
    military: (zone === "desert" ? 0.22 : 0) + spread.military,
    cia: (zone === "city" ? 0.18 : 0) + spread.cia,
  };
}

function pickEnemyLotIndex(cx, cy, rng, saltX, saltY, chance) {
  if (chance <= 0) {
    return -1;
  }
  const roll = (hash2d(cx * saltX + 7, cy * saltY + 11) % 1000) / 1000;
  if (roll >= chance) {
    return -1;
  }
  return randomInt(rng, 0, 3);
}

function addZoneRoadTargets(chunk, rng, count = 8) {
  for (let index = 0; index < count; index += 1) {
    const road = chunk.roads[index % Math.max(1, Math.min(2, chunk.roads.length))];
    const point = sampleRectPerimeter(road, rng());
    addWalkTarget(chunk, point.x, point.y);
  }
}

function createNeighborhoodChunk(chunk, rng) {
  const { originX, originY } = chunk;
  const centerRoadX = originX + CONFIG.chunkSize * 0.5 - CONFIG.roadWidth * 0.5;
  const centerRoadY = originY + CONFIG.chunkSize * 0.5 - CONFIG.roadWidth * 0.5;
  chunk.roads.push(
    { x: originX, y: centerRoadY, w: CONFIG.chunkSize, h: CONFIG.roadWidth, type: "horizontal" },
    { x: centerRoadX, y: originY, w: CONFIG.roadWidth, h: CONFIG.chunkSize, type: "vertical" },
  );
  const lots = [
    { x: originX + 30, y: originY + 30, w: 360, h: 360 },
    { x: originX + 570, y: originY + 30, w: 360, h: 360 },
    { x: originX + 30, y: originY + 570, w: 360, h: 360 },
    { x: originX + 570, y: originY + 570, w: 360, h: 360 },
  ];
  const lotTypes = ["homes", "homes", "park", "homes"];
  if ((hash2d(chunk.cx * 5 + 11, chunk.cy * 7 - 13) % 1000) / 1000 < 0.08) {
    lotTypes[randomInt(rng, 0, 3)] = "policeStation";
  } else if ((hash2d(chunk.cx * 9 + 17, chunk.cy * 3 + 5) % 1000) / 1000 < 0.18) {
    lotTypes[randomInt(rng, 0, 3)] = "market";
  }
  for (let index = 0; index < lots.length; index += 1) {
    createLot(chunk, lots[index], lotTypes[index], rng);
  }
  for (let index = 0; index < 18; index += 1) {
    addDeco(chunk, {
      type: "tree",
      x: randomBetween(rng, originX + 40, originX + CONFIG.chunkSize - 40),
      y: randomBetween(rng, originY + 40, originY + CONFIG.chunkSize - 40),
      size: randomBetween(rng, 12, 22),
    });
  }
  addZoneRoadTargets(chunk, rng, 10);
}

function createCityChunk(chunk, rng) {
  const { originX, originY } = chunk;
  const centerRoadX = originX + CONFIG.chunkSize * 0.5 - CONFIG.roadWidth * 0.5;
  const centerRoadY = originY + CONFIG.chunkSize * 0.5 - CONFIG.roadWidth * 0.5;
  chunk.roads.push(
    { x: originX, y: centerRoadY, w: CONFIG.chunkSize, h: CONFIG.roadWidth, type: "horizontal" },
    { x: centerRoadX, y: originY, w: CONFIG.roadWidth, h: CONFIG.chunkSize, type: "vertical" },
    { x: originX + CONFIG.chunkSize * 0.24, y: originY, w: CONFIG.sidewalkWidth * 2, h: CONFIG.chunkSize, type: "vertical" },
    { x: originX, y: originY + CONFIG.chunkSize * 0.24, w: CONFIG.chunkSize, h: CONFIG.sidewalkWidth * 2, type: "horizontal" },
  );
  const lots = [
    { x: originX + 24, y: originY + 24, w: 330, h: 330 },
    { x: originX + 606, y: originY + 24, w: 330, h: 330 },
    { x: originX + 24, y: originY + 606, w: 330, h: 330 },
    { x: originX + 606, y: originY + 606, w: 330, h: 330 },
  ];
  const cityLotTypes = ["officeTower", "skyscraper", "apartments", "officeTower"];
  if ((hash2d(chunk.cx * 17 + 3, chunk.cy * 19 + 7) % 1000) / 1000 < 0.18) {
    cityLotTypes[randomInt(rng, 0, 3)] = "ciaBase";
  }
  for (let index = 0; index < lots.length; index += 1) {
    const lot = lots[index];
    const type = cityLotTypes[index];
    if (type === "ciaBase") {
      createLot(chunk, lot, "ciaBase", rng);
    } else if (type === "skyscraper") {
      addBuilding(chunk, lot.x + 34, lot.y + 20, lot.w - 68, lot.h - 40, "skyscraper", "#7c8794");
      addWalkTarget(chunk, lot.x + lot.w * 0.5, lot.y + lot.h - 18);
    } else if (type === "officeTower") {
      addBuilding(chunk, lot.x + 28, lot.y + 34, lot.w - 56, lot.h - 68, "officeTower", "#68717d");
      addWalkTarget(chunk, lot.x + lot.w * 0.5, lot.y + lot.h - 18);
    } else {
      createLot(chunk, lot, "apartments", rng);
    }
  }
  for (let index = 0; index < 8; index += 1) {
    const road = chunk.roads[index % 2];
    const point = sampleRectPerimeter(road, rng());
    addWalkTarget(chunk, point.x, point.y);
    addDeco(chunk, { type: "lamp", x: point.x, y: point.y });
  }
}

function createDesertChunk(chunk, rng) {
  const { originX, originY } = chunk;
  const centerRoadY = originY + CONFIG.chunkSize * 0.5 - CONFIG.roadWidth * 0.5;
  chunk.roads.push(
    { x: originX, y: centerRoadY, w: CONFIG.chunkSize, h: CONFIG.roadWidth, type: "horizontal" },
    { x: originX + CONFIG.chunkSize * 0.7, y: originY, w: CONFIG.sidewalkWidth * 2, h: CONFIG.chunkSize, type: "vertical" },
  );
  if ((hash2d(chunk.cx * 13 + 5, chunk.cy * 23 + 9) % 1000) / 1000 < 0.34) {
    createLot(chunk, { x: originX + 140, y: originY + 180, w: 420, h: 360 }, "militaryBase", rng);
  }
  for (let index = 0; index < 12; index += 1) {
    addDeco(chunk, { type: "cactus", x: randomBetween(rng, originX + 40, originX + CONFIG.chunkSize - 40), y: randomBetween(rng, originY + 40, originY + CONFIG.chunkSize - 40), size: randomBetween(rng, 12, 24) });
  }
  for (let index = 0; index < 6; index += 1) {
    addDeco(chunk, { type: "tumbleweed", x: randomBetween(rng, originX + 30, originX + CONFIG.chunkSize - 30), y: randomBetween(rng, originY + 30, originY + CONFIG.chunkSize - 30), size: randomBetween(rng, 8, 16) });
    addDeco(chunk, { type: "flower", x: randomBetween(rng, originX + 30, originX + CONFIG.chunkSize - 30), y: randomBetween(rng, originY + 30, originY + CONFIG.chunkSize - 30), color: "#8b63c5" });
  }
  addZoneRoadTargets(chunk, rng, 6);
}

function createCountryChunk(chunk, rng) {
  const { originX, originY } = chunk;
  const biome = getCountryBiome(chunk.cx, chunk.cy);
  chunk.biome = biome;
  if (rng() > 0.45) {
    chunk.roads.push(
      { x: originX, y: originY + CONFIG.chunkSize * 0.5 - CONFIG.sidewalkWidth, w: CONFIG.chunkSize, h: CONFIG.sidewalkWidth * 2, type: "horizontal" },
      { x: originX + CONFIG.chunkSize * 0.5 - CONFIG.sidewalkWidth, y: originY, w: CONFIG.sidewalkWidth * 2, h: CONFIG.chunkSize, type: "vertical" },
    );
  } else {
    chunk.roads.push(
      { x: originX + 90, y: originY + CONFIG.chunkSize * 0.52, w: CONFIG.chunkSize - 180, h: CONFIG.sidewalkWidth * 2, type: "horizontal" },
      { x: originX + CONFIG.chunkSize * 0.48, y: originY + 90, w: CONFIG.sidewalkWidth * 2, h: CONFIG.chunkSize - 180, type: "vertical" },
    );
  }
  const hasRiver = rng() > 0.58;
  if (hasRiver) {
    addDeco(chunk, { type: "river", x: originX + 40, y: originY + randomBetween(rng, 140, 280), w: CONFIG.chunkSize - 80, h: randomBetween(rng, 70, 110) });
  }
  if (biome === "farm" && rng() > 0.22) {
    addBuilding(chunk, originX + 110, originY + 110, 130, 92, "farmhouse", "#d8c2a0");
    addBuilding(chunk, originX + 300, originY + 150, 170, 110, "barn", "#a04e42");
    addWalkTarget(chunk, originX + 175, originY + 220);
    addWalkTarget(chunk, originX + 385, originY + 280);
  }
  const treeCount = biome === "farm" ? 10 : 24;
  for (let index = 0; index < treeCount; index += 1) {
    addDeco(chunk, {
      type: "tree",
      x: randomBetween(rng, originX + 30, originX + CONFIG.chunkSize - 30),
      y: randomBetween(rng, originY + 30, originY + CONFIG.chunkSize - 30),
      size: randomBetween(rng, 12, 24),
    });
  }
  addZoneRoadTargets(chunk, rng, 8);
}

function generateChunk(cx, cy) {
  const key = chunkKey(cx, cy);
  const originX = cx * CONFIG.chunkSize;
  const originY = cy * CONFIG.chunkSize;
  const rng = mulberry32(hash2d(cx, cy));
  const zone = getWorldZone(cx, cy);
  const chunk = {
    key,
    cx,
    cy,
    zone,
    biome: zone === "country" ? getCountryBiome(cx, cy) : zone,
    originX,
    originY,
    roads: [],
    buildings: [],
    decor: [],
    walkTargets: [],
    policeSpawns: [],
    militarySpawns: [],
    ciaSpawns: [],
    populated: false,
  };

  if (zone === "neighborhood") {
    createNeighborhoodChunk(chunk, rng);
  } else if (zone === "city") {
    createCityChunk(chunk, rng);
  } else if (zone === "desert") {
    createDesertChunk(chunk, rng);
  } else {
    createCountryChunk(chunk, rng);
  }

  const parkedCivilianCars =
    zone === "city" ? randomInt(rng, 2, 5) :
    zone === "neighborhood" ? randomInt(rng, 2, 4) :
    zone === "country" ? (chunk.biome === "farm" ? randomInt(rng, 1, 2) : randomInt(rng, 0, 1)) :
    0;
  const civilianCarColors = ["#6f8fae", "#8f4545", "#69845c", "#c18d42", "#72727e"];
  for (let index = 0; index < parkedCivilianCars; index += 1) {
    if (!chunk.roads.length) {
      break;
    }
    const road = chunk.roads[index % chunk.roads.length];
    const point = sampleRectPerimeter(road, rng());
    addDeco(chunk, {
      type: "civilianCar",
      x: point.x - 26,
      y: point.y - 12,
      w: 52,
      h: 24,
      parked: true,
      color: civilianCarColors[index % civilianCarColors.length],
    });
  }

  return chunk;
}

function generateSandboxChunk(cx, cy) {
  const key = chunkKey(cx, cy);
  const originX = cx * CONFIG.chunkSize;
  const originY = cy * CONFIG.chunkSize;
  const arenaRadius = state.sandbox.arenaRadiusChunks;
  const rng = mulberry32(hash2d(cx * 97 + 11, cy * 89 - 7));
  const chunk = {
    key,
    cx,
    cy,
    zone: "sandbox",
    originX,
    originY,
    roads: [],
    buildings: [],
    decor: [],
    walkTargets: [],
    policeSpawns: [],
    militarySpawns: [],
    ciaSpawns: [],
    populated: false,
  };

  if (Math.abs(cx) > arenaRadius || Math.abs(cy) > arenaRadius) {
    addBuilding(chunk, originX, originY, CONFIG.chunkSize, CONFIG.chunkSize, "apartments", "#7f7f85");
    return chunk;
  }

  const centerRoadX = originX + CONFIG.chunkSize * 0.5 - CONFIG.roadWidth * 0.5;
  const centerRoadY = originY + CONFIG.chunkSize * 0.5 - CONFIG.roadWidth * 0.5;
  chunk.roads.push(
    { x: originX, y: centerRoadY, w: CONFIG.chunkSize, h: CONFIG.roadWidth, type: "horizontal" },
    { x: centerRoadX, y: originY, w: CONFIG.roadWidth, h: CONFIG.chunkSize, type: "vertical" },
  );

  addDeco(chunk, { type: "plaza", x: originX + CONFIG.chunkSize * 0.5 - 84, y: originY + CONFIG.chunkSize * 0.5 - 84, w: 168, h: 168 });
  addWalkTarget(chunk, originX + CONFIG.chunkSize * 0.25, originY + CONFIG.chunkSize * 0.25);
  addWalkTarget(chunk, originX + CONFIG.chunkSize * 0.75, originY + CONFIG.chunkSize * 0.25);
  addWalkTarget(chunk, originX + CONFIG.chunkSize * 0.25, originY + CONFIG.chunkSize * 0.75);
  addWalkTarget(chunk, originX + CONFIG.chunkSize * 0.75, originY + CONFIG.chunkSize * 0.75);
  addWalkTarget(chunk, originX + CONFIG.chunkSize * 0.5, originY + CONFIG.chunkSize * 0.5);

  const wallThickness = 42;
  if (cy === -arenaRadius) {
    addBuilding(chunk, originX, originY, CONFIG.chunkSize, wallThickness, "home", "#9b8b81");
  }
  if (cy === arenaRadius) {
    addBuilding(chunk, originX, originY + CONFIG.chunkSize - wallThickness, CONFIG.chunkSize, wallThickness, "home", "#9b8b81");
  }
  if (cx === -arenaRadius) {
    addBuilding(chunk, originX, originY, wallThickness, CONFIG.chunkSize, "home", "#9b8b81");
  }
  if (cx === arenaRadius) {
    addBuilding(chunk, originX + CONFIG.chunkSize - wallThickness, originY, wallThickness, CONFIG.chunkSize, "home", "#9b8b81");
  }

  for (let index = 0; index < 4; index += 1) {
    const point = sampleRectPerimeter(chunk.roads[index % 2], rng());
    addDeco(chunk, { type: "lamp", x: point.x + randomBetween(rng, -10, 10), y: point.y + randomBetween(rng, -10, 10) });
  }

  return chunk;
}

function sampleWalkTarget(chunk, rng) {
  if (!chunk.walkTargets.length) {
    return { x: chunk.originX + CONFIG.chunkSize * 0.5, y: chunk.originY + CONFIG.chunkSize * 0.5 };
  }
  return chunk.walkTargets[Math.floor(rng() * chunk.walkTargets.length)];
}

function ensureChunksAroundPlayer() {
  const { cx, cy } = getChunkCoords(state.player.x, state.player.y);
  const needed = new Set();

  for (let dy = -CONFIG.activeChunkRadius; dy <= CONFIG.activeChunkRadius; dy += 1) {
    for (let dx = -CONFIG.activeChunkRadius; dx <= CONFIG.activeChunkRadius; dx += 1) {
      const key = chunkKey(cx + dx, cy + dy);
      needed.add(key);
      if (!state.world.chunks.has(key)) {
        state.world.chunks.set(
          key,
          state.gameMode === "sandbox" ? generateSandboxChunk(cx + dx, cy + dy) : generateChunk(cx + dx, cy + dy),
        );
      }
    }
  }

  for (const [key] of state.world.chunks.entries()) {
    if (!needed.has(key)) {
      state.world.chunks.delete(key);
    }
  }
}

// SECTION: npc logic
function spawnCivilian(chunk, rng, options = {}) {
  const spawn = sampleWalkTarget(chunk, rng);
  const target = sampleWalkTarget(chunk, rng);
  const inCar = options.inCar ?? (rng() > 0.8);
  const carColors = ["#6f8fae", "#8f4545", "#69845c", "#c18d42", "#72727e"];
  state.world.npcs.push({
    id: state.world.nextNpcId,
    type: "civilian",
    x: spawn.x + randomBetween(rng, -18, 18),
    y: spawn.y + randomBetween(rng, -18, 18),
    vx: 0,
    vy: 0,
    radius: inCar ? 10 : 7,
    homeChunkKey: chunk.key,
    targetX: target.x,
    targetY: target.y,
    timer: randomBetween(rng, 1.8, 4.5),
    fearTimer: 0,
    lastSeenTimer: 0,
    runSoundTimer: randomBetween(rng, 0.08, 0.24),
    panicSounded: false,
    inCar,
    crashedTimer: 0,
    escapeCar: null,
    activeCar: null,
    carColor: carColors[randomInt(rng, 0, carColors.length - 1)],
    alive: true,
    tint: (options.palette || ["#2e3b42", "#5a4738", "#46615a", "#544f69"])[randomInt(rng, 0, (options.palette || ["#2e3b42", "#5a4738", "#46615a", "#544f69"]).length - 1)],
    style: options.style || "casual",
  });
  state.world.nextNpcId += 1;
}

function getAnimalProfile(species) {
  if (species === "wolf") return { radius: 8, tint: "#60666f" };
  if (species === "bear") return { radius: 11, tint: "#6a4c3c" };
  if (species === "fox") return { radius: 7, tint: "#bb6b3f" };
  if (species === "owl") return { radius: 6, tint: "#83796c" };
  if (species === "frog") return { radius: 5, tint: "#5e8c56" };
  if (species === "beaver") return { radius: 7, tint: "#7a5a40" };
  if (species === "porcupine") return { radius: 6, tint: "#74685f" };
  if (species === "moose") return { radius: 11, tint: "#675141" };
  if (species === "deer") return { radius: 8, tint: "#9f7b58" };
  if (species === "fish") return { radius: 5, tint: "#6f97b5" };
  if (species === "chicken") return { radius: 5, tint: "#ddd4c4" };
  if (species === "horse") return { radius: 9, tint: "#7c5b45" };
  if (species === "pig") return { radius: 7, tint: "#d0a3a5" };
  if (species === "sheep") return { radius: 7, tint: "#e9e7df" };
  if (species === "cow") return { radius: 9, tint: "#d7d0c3" };
  return { radius: 7, tint: "#7c6b58" };
}

function spawnAnimal(chunk, rng, species, options = {}) {
  const spawn = options.spawn || sampleWalkTarget(chunk, rng);
  const target = sampleWalkTarget(chunk, rng);
  const profile = getAnimalProfile(species);
  state.world.npcs.push({
    id: state.world.nextNpcId,
    type: "animal",
    species,
    x: spawn.x + randomBetween(rng, -16, 16),
    y: spawn.y + randomBetween(rng, -16, 16),
    vx: 0,
    vy: 0,
    radius: profile.radius,
    tint: profile.tint,
    homeChunkKey: chunk.key,
    targetX: target.x,
    targetY: target.y,
    timer: randomBetween(rng, 1.2, 3.6),
    penned: Boolean(options.penned),
    alive: true,
  });
  state.world.nextNpcId += 1;
}

function spawnBird(chunk, rng) {
  const spawn = sampleWalkTarget(chunk, rng);
  state.world.npcs.push({
    id: state.world.nextNpcId,
    type: "bird",
    x: spawn.x + randomBetween(rng, -50, 50),
    y: spawn.y + randomBetween(rng, -40, 40),
    vx: randomBetween(rng, -0.8, 0.8),
    vy: randomBetween(rng, -0.45, 0.45),
    radius: 4,
    homeChunkKey: chunk.key,
    targetX: spawn.x,
    targetY: spawn.y,
    timer: randomBetween(rng, 0.7, 1.8),
    wingOffset: randomBetween(rng, 0, Math.PI * 2),
    alive: true,
  });
  state.world.nextNpcId += 1;
}

function spawnChunkPopulation(chunk) {
  const rng = mulberry32(hash2d(chunk.cx * 7 + 13, chunk.cy * 5 + 17));
  const zone = chunk.zone || "neighborhood";

  if (zone === "neighborhood") {
    const population = randomInt(rng, 5, 8);
    for (let index = 0; index < population; index += 1) {
      spawnCivilian(chunk, rng, {
        inCar: rng() > 0.74,
        palette: ["#405769", "#5b4e44", "#58746b", "#6a5b7d"],
      });
    }
  } else if (zone === "city") {
    const population = randomInt(rng, 8, 13);
    for (let index = 0; index < population; index += 1) {
      spawnCivilian(chunk, rng, {
        inCar: rng() > 0.68,
        style: rng() > 0.45 ? "suit" : "casual",
        palette: ["#2c3441", "#5d4c44", "#354559", "#4d5561", "#6e5547"],
      });
    }
    for (let index = 0; index < randomInt(rng, 1, 3); index += 1) {
      spawnBird(chunk, rng);
    }
  } else if (zone === "desert") {
    const workers = randomInt(rng, 0, 2);
    for (let index = 0; index < workers; index += 1) {
      spawnCivilian(chunk, rng, {
        inCar: rng() > 0.55,
        palette: ["#72624f", "#6d7568", "#8a7764"],
      });
    }
  } else {
    const biome = chunk.biome || getCountryBiome(chunk.cx, chunk.cy);
    const people = biome === "farm" ? randomInt(rng, 2, 5) : randomInt(rng, 0, 2);
    for (let index = 0; index < people; index += 1) {
      spawnCivilian(chunk, rng, {
        inCar: biome === "farm" ? rng() > 0.82 : rng() > 0.94,
        palette: ["#546d46", "#7d684f", "#45616b", "#6f5f54"],
      });
    }
    const birdCount = biome === "farm" ? randomInt(rng, 2, 4) : randomInt(rng, 1, 3);
    for (let index = 0; index < birdCount; index += 1) {
      spawnBird(chunk, rng);
    }
    const wildSpecies = ["wolf", "bear", "fox", "owl", "frog", "beaver", "porcupine", "moose", "deer"];
    const animalCount = biome === "farm" ? randomInt(rng, 2, 4) : randomInt(rng, 5, 8);
    for (let index = 0; index < animalCount; index += 1) {
      spawnAnimal(chunk, rng, wildSpecies[randomInt(rng, 0, wildSpecies.length - 1)]);
    }
    if (chunk.decor.some((deco) => deco.type === "river")) {
      for (let index = 0; index < 3; index += 1) {
        const river = chunk.decor.find((deco) => deco.type === "river");
        spawnAnimal(chunk, rng, "fish", {
          penned: true,
          spawn: {
            x: river.x + randomBetween(rng, 20, river.w - 20),
            y: river.y + randomBetween(rng, 20, river.h - 20),
          },
        });
      }
    }
    if (chunk.buildings.some((building) => building.kind === "barn")) {
      const barnAnimals = ["chicken", "horse", "pig", "sheep", "cow"];
      const barn = chunk.buildings.find((building) => building.kind === "barn");
      const count = randomInt(rng, 3, 6);
      for (let index = 0; index < count; index += 1) {
        spawnAnimal(chunk, rng, barnAnimals[randomInt(rng, 0, barnAnimals.length - 1)], {
          penned: true,
          spawn: {
            x: barn.x + randomBetween(rng, 18, barn.w - 18),
            y: barn.y + barn.h + randomBetween(rng, 18, 72),
          },
        });
      }
    }
  }

  chunk.populated = true;
}

function ensureChunkPopulation() {
  if (state.gameMode === "sandbox") {
    return;
  }
  const loadedKeys = new Set(state.world.chunks.keys());
  for (const chunk of state.world.chunks.values()) {
    if (!chunk.populated) {
      spawnChunkPopulation(chunk);
    }
  }

  state.world.npcs = state.world.npcs.filter((npc) => npc.alive && loadedKeys.has(npc.homeChunkKey));
}

function getOrCreateChunkForPosition(x, y) {
  const { cx, cy } = getChunkCoords(x, y);
  const key = chunkKey(cx, cy);
  if (!state.world.chunks.has(key)) {
    state.world.chunks.set(key, state.gameMode === "sandbox" ? generateSandboxChunk(cx, cy) : generateChunk(cx, cy));
  }
  return state.world.chunks.get(key);
}

function setPlayerConsumedHumans(nextValue) {
  const targetConsumed = clamp(Math.round(nextValue), 0, 140);
  state.player.absorbedHumans = targetConsumed;
  const followerTarget = 5 + targetConsumed * CONFIG.biomatterPerHuman;
  while (state.player.followers.length < followerTarget) {
    gainBiomass(1, state.player.x, state.player.y);
  }
  while (state.player.followers.length > followerTarget) {
    state.player.followers.pop();
  }
  updateHud();
  updateSandboxUi();
}

function adjustSandboxPlayerSize(delta) {
  setPlayerConsumedHumans(state.player.absorbedHumans + delta);
}

function desiredPoliceCount() {
  const zone = getCurrentWorldZone();
  const sizePressure = Math.floor(state.player.absorbedHumans / 4);
  const alertPressure = Math.floor(state.world.alert / 24);
  if (zone !== "neighborhood" && !isEnemySpreadUnlocked("police")) {
    return 0;
  }
  const base = zone === "neighborhood" ? 1 : 0;
  return Math.min(12, base + sizePressure + alertPressure + (state.player.absorbedHumans >= 3 ? 1 : 0));
}

function shouldSpawnPoliceBoss() {
  if (state.world.policeBossSpawned) {
    return false;
  }
  return (
    state.player.absorbedHumans >= CONFIG.policeBossSpawnConsumed ||
    state.world.policeDeathsTotal >= CONFIG.policeBossSpawnKills
  );
}

function hasPoliceBoss() {
  return state.world.npcs.some((npc) => npc.type === "policeBoss" && npc.alive);
}

function shouldSpawnMilitaryBoss() {
  if (state.world.militaryBossSpawned) {
    return false;
  }
  return (
    state.player.absorbedHumans >= CONFIG.militaryBossSpawnConsumed ||
    state.world.militaryDeathsTotal >= CONFIG.militaryBossSpawnKills
  );
}

function hasMilitaryBoss() {
  return state.world.npcs.some((npc) => npc.type === "militaryBoss" && npc.alive);
}

function shouldSpawnCIABoss() {
  if (state.world.ciaBossSpawned) {
    return false;
  }
  return (
    state.player.absorbedHumans >= CONFIG.ciaBossSpawnConsumed ||
    state.world.ciaDeathsTotal >= CONFIG.ciaBossSpawnKills
  );
}

function createCIAWormState() {
  return {
    active: false,
    cutscene: false,
    cutsceneTimer: 0,
    portalX: 0,
    portalY: 0,
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    dirX: 1,
    dirY: 0,
    mode: "dormant",
    timer: 0,
    actionTimer: 0,
    damageTimer: 0,
    quakeEventTimer: 0,
    quake: 0,
    holes: [],
    dust: [],
    trail: [],
    visible: false,
    chompPhase: 0,
    emergeApplied: false,
  };
}

function desiredMilitaryCounts() {
  const size = state.player.absorbedHumans;
  const zone = getCurrentWorldZone();
  if (zone !== "desert" && !isEnemySpreadUnlocked("military")) {
    return { militarySoldier: 0, militaryGrenadier: 0, tank: 0, helicopter: 0 };
  }
  const base = zone === "desert" ? 1 : 0;
  return {
    militarySoldier: Math.min(5, base + (size >= 6 ? 1 + Math.floor((size - 6) / 7) : 0)),
    militaryGrenadier: Math.min(3, zone === "desert" ? (size >= 6 ? 1 + Math.floor(Math.max(0, size - 10) / 10) : 0) : (size >= 10 ? 1 + Math.floor((size - 10) / 10) : 0)),
    tank: zone === "desert" ? Math.min(2, size >= 12 ? 1 + Math.floor(Math.max(0, size - 16) / 16) : 0) : (size >= 16 ? Math.min(2, 1 + Math.floor((size - 16) / 16)) : 0),
    helicopter: zone === "desert" ? Math.min(2, size >= 18 ? 1 + Math.floor(Math.max(0, size - 24) / 20) : 0) : (size >= 24 ? Math.min(2, 1 + Math.floor((size - 24) / 20)) : 0),
  };
}

function desiredCIASquads() {
  const size = state.player.absorbedHumans;
  const zone = getCurrentWorldZone();
  if (zone !== "city" && !isEnemySpreadUnlocked("cia") && size < 26) {
    return 0;
  }
  if (zone === "city" && size < 26) {
    return 1;
  }
  return size >= 44 ? 2 : 1;
}

function desiredAlienCount() {
  const size = state.player.absorbedHumans;
  const zone = getCurrentWorldZone();
  if (zone !== "country" && !isEnemySpreadUnlocked("alien") && size < 40) {
    return 0;
  }
  if (zone === "country" && size < 40) {
    return 1;
  }
  return size >= 58 ? 2 : 1;
}

function countNpcsByType(type) {
  return state.world.npcs.filter((npc) => npc.type === type).length;
}

function countSquadsByType(type) {
  return new Set(state.world.npcs.filter((npc) => npc.type === type).map((npc) => npc.squadId)).size;
}

function createPoliceBossNpc(spawnPoint, rng) {
  return {
    id: state.world.nextNpcId,
    type: "policeBoss",
    x: spawnPoint.x,
    y: spawnPoint.y,
    vx: 0,
    vy: 0,
    radius: 12,
    homeChunkKey: spawnPoint.chunkKey,
    targetX: state.player.x,
    targetY: state.player.y,
    timer: 0,
    lastSeenTimer: 0,
    shootCooldown: randomBetween(rng, 1.2, 2.8),
    faceX: -1,
    faceY: 0,
    inVehicle: true,
    carColor: "#263852",
    activeCar: null,
    alive: true,
    health: CONFIG.policeBossHealth,
    maxHealth: CONFIG.policeBossHealth,
    disengageTimer: 1.4,
    orbitDirection: rng() > 0.5 ? 1 : -1,
    orbitSeed: randomBetween(rng, 0, Math.PI * 2),
    reinforcementCalls: 0,
    reinforcementCooldown: randomBetween(rng, 2.4, 4.2),
    title: "Motorcycle Sergeant",
  };
}

function createMilitaryBossNpc(spawnPoint, rng) {
  const armWeapons = ["flamethrower", "minigun", "rocket", "chainsaw"];
  const armMounts = [
    { x: -20, y: -12 },
    { x: 20, y: -12 },
    { x: -20, y: 14 },
    { x: 20, y: 14 },
  ];
  return {
    id: state.world.nextNpcId,
    type: "militaryBoss",
    x: spawnPoint.x,
    y: spawnPoint.y,
    vx: 0,
    vy: 0,
    radius: 28,
    homeChunkKey: spawnPoint.chunkKey,
    targetX: state.player.x,
    targetY: state.player.y,
    timer: 0,
    lastSeenTimer: 0,
    faceX: -1,
    faceY: 0,
    alive: true,
    health: CONFIG.militaryBossHealth,
    maxHealth: CONFIG.militaryBossHealth,
    arms: armMounts.map((mount, index) => ({
      weapon: armWeapons[randomInt(rng, 0, armWeapons.length - 1)],
      mountX: mount.x,
      mountY: mount.y,
      length: randomBetween(rng, 34, 50),
      swingOffset: randomBetween(rng, 0, Math.PI * 2),
      cooldown: randomBetween(rng, 0.15, 1.2),
      side: index % 2 === 0 ? -1 : 1,
    })),
    mode: "wander",
    searchTimer: randomBetween(rng, 1.1, 2.4),
    attackTimer: 0,
    chargeCooldown: randomBetween(rng, 2.6, 4.4),
    jumpCooldown: randomBetween(rng, 2.4, 4.8),
    reinforcementCooldown: randomBetween(rng, 3.4, 5.2),
    retreatThresholds: [0.74, 0.5, 0.26],
    retreatThresholdIndex: 0,
    retreatTargetX: spawnPoint.x,
    retreatTargetY: spawnPoint.y,
    retreatTimer: 0,
    bodyDamageCooldown: 0,
    chargeDirX: 1,
    chargeDirY: 0,
    slamStartX: spawnPoint.x,
    slamStartY: spawnPoint.y,
    slamTargetX: spawnPoint.x,
    slamTargetY: spawnPoint.y,
    altitude: 0,
  };
}

function createMilitaryNpc(type, spawnPoint, rng) {
  const base = {
    id: state.world.nextNpcId,
    type,
    x: spawnPoint.x,
    y: spawnPoint.y,
    vx: 0,
    vy: 0,
    homeChunkKey: spawnPoint.chunkKey,
    targetX: state.player.x,
    targetY: state.player.y,
    timer: 0,
    lastSeenTimer: 0,
    faceX: -1,
    faceY: 0,
    alive: true,
  };

  if (type === "militarySoldier") {
    return {
      ...base,
      radius: 8,
      shootCooldown: randomBetween(rng, 0.18, 0.42),
    };
  }

  if (type === "militaryGrenadier") {
    return {
      ...base,
      radius: 8,
      shootCooldown: randomBetween(rng, 0.4, 0.8),
      grenadeCooldown: randomBetween(rng, 0.5, 1.2),
    };
  }

  if (type === "tank") {
    return {
      ...base,
      radius: 18,
      shootCooldown: randomBetween(rng, 0.9, 1.6),
    };
  }

  return {
    ...base,
    radius: 14,
    shootCooldown: randomBetween(rng, 0.08, 0.16),
    altitude: 58 + rng() * 24,
  };
}

function createAlienNpc(spawnPoint, rng) {
  const variants = ["bomb", "laser", "minigun"];
  const variant = variants[randomInt(rng, 0, variants.length - 1)];
  return {
    id: state.world.nextNpcId,
    type: "alien",
    x: spawnPoint.x,
    y: spawnPoint.y,
    vx: 0,
    vy: 0,
    radius: 16,
    homeChunkKey: spawnPoint.chunkKey,
    targetX: state.player.x,
    targetY: state.player.y,
    timer: 0,
    lastSeenTimer: 0,
    faceX: 1,
    faceY: 0,
    alive: true,
    variant,
    shootCooldown: variant === "bomb" ? randomBetween(rng, 0.3, 0.8) : variant === "laser" ? randomBetween(rng, 0.4, 0.9) : randomBetween(rng, 0.08, 0.16),
    trapCooldown: randomBetween(rng, 1.2, 2.4),
    altitude: 92 + rng() * 28,
  };
}

function spawnCIASquadAt(x, y) {
  const chunk = getOrCreateChunkForPosition(x, y);
  if (!chunk) {
    return;
  }
  const rng = mulberry32(hash2d(Math.floor(x), Math.floor(y) + state.world.nextNpcId * 11));
  const squadId = `cia-${state.world.nextNpcId}-${Math.floor(state.time * 10)}`;
  const squadMode = rng() > 0.45 ? "driveBy" : "dismount";
  const groupSize = 3 + (rng() > 0.7 ? 1 : 0);
  for (let index = 0; index < groupSize; index += 1) {
    const offset = (index - (groupSize - 1) * 0.5) * 26;
    state.world.npcs.push({
      id: state.world.nextNpcId,
      type: "cia",
      squadId,
      squadMode,
      x: x + offset,
      y,
      vx: 0,
      vy: 0,
      radius: 8,
      homeChunkKey: chunk.key,
      targetX: state.player.x,
      targetY: state.player.y,
      timer: 0,
      lastSeenTimer: 0,
      shootCooldown: randomBetween(rng, 0.1, 0.35),
      faceX: 1,
      faceY: 0,
      inVehicle: true,
      activeCar: null,
      carColor: "#111214",
      alive: true,
    });
    state.world.nextNpcId += 1;
  }
}

function spawnSandboxEnemy(id, x, y) {
  const chunk = getOrCreateChunkForPosition(x, y);
  if (!chunk) {
    return;
  }
  const spawnPoint = { x, y, chunkKey: chunk.key };
  const rng = mulberry32(hash2d(Math.floor(x) + state.world.nextNpcId * 3, Math.floor(y) - state.world.nextNpcId * 5));

  if (id === "police") {
    state.world.npcs.push(createPoliceNpc(spawnPoint, rng, { inVehicle: false }));
    state.world.nextNpcId += 1;
    return;
  }

  if (id === "policeSquad") {
    for (let index = 0; index < 3; index += 1) {
      state.world.npcs.push(createPoliceNpc({ ...spawnPoint, x: x + (index - 1) * 24 }, rng, { inVehicle: index === 0 }));
      state.world.nextNpcId += 1;
    }
    return;
  }

  if (id === "policeBoss") {
    spawnPoliceBossAt(x, y);
    return;
  }

  if (id === "militaryBoss") {
    spawnMilitaryBossAt(x, y);
    return;
  }

  if (id === "ciaSquad") {
    spawnCIASquadAt(x, y);
    return;
  }

  if (id === "ciaBoss") {
    triggerCIAWormSummon(x, y, { immediate: true });
    return;
  }

  if (id === "alienWing") {
    for (let index = 0; index < 3; index += 1) {
      const alien = createAlienNpc({ ...spawnPoint, x: x + (index - 1) * 34, y: y - Math.abs(index - 1) * 12 }, rng);
      state.world.npcs.push(alien);
      state.world.nextNpcId += 1;
    }
    return;
  }

  if (id === "alien") {
    state.world.npcs.push(createAlienNpc(spawnPoint, rng));
    state.world.nextNpcId += 1;
    return;
  }

  if (["militarySoldier", "militaryGrenadier", "tank", "helicopter"].includes(id)) {
    state.world.npcs.push(createMilitaryNpc(id, spawnPoint, rng));
    state.world.nextNpcId += 1;
  }
}

function placeSandboxStructure(id, x, y) {
  const chunk = getOrCreateChunkForPosition(x, y);
  if (!chunk) {
    return;
  }

  if (id === "tree") {
    addDeco(chunk, { type: "tree", x, y, size: 18 });
    return;
  }

  if (id === "lamp") {
    addDeco(chunk, { type: "lamp", x, y });
    return;
  }

  if (id === "civilianCar") {
    addDeco(chunk, { type: "civilianCar", x: x - 26, y: y - 12, w: 52, h: 24, parked: true, color: "#8f4545" });
    return;
  }

  if (id === "park") {
    addDeco(chunk, { type: "plaza", x: x - 68, y: y - 68, w: 136, h: 136 });
    addDeco(chunk, { type: "tree", x: x - 54, y: y - 42, size: 16 });
    addDeco(chunk, { type: "tree", x: x + 58, y: y - 36, size: 18 });
    addDeco(chunk, { type: "tree", x: x - 44, y: y + 48, size: 15 });
    addDeco(chunk, { type: "tree", x: x + 48, y: y + 52, size: 17 });
    addWalkTarget(chunk, x, y);
    return;
  }

  if (id === "home") {
    addBuilding(chunk, x - 58, y - 42, 116, 84, "home", "#d7b48b");
    addWalkTarget(chunk, x, y + 56);
    return;
  }

  if (id === "apartments") {
    addBuilding(chunk, x - 82, y - 62, 164, 124, "apartments", "#9fa7b3");
    addWalkTarget(chunk, x, y + 76);
    return;
  }

  if (id === "marketHall") {
    addBuilding(chunk, x - 92, y - 58, 184, 116, "marketHall", "#b98c66");
    addDeco(chunk, { type: "stall", x: x - 58, y: y - 18, w: 56, h: 36, awning: "#d24b4b" });
    addDeco(chunk, { type: "stall", x: x + 8, y: y - 18, w: 56, h: 36, awning: "#4b8dd2" });
    addWalkTarget(chunk, x, y + 70);
    return;
  }

  if (id === "policeStation") {
    addBuilding(chunk, x - 88, y - 50, 176, 92, "policeStation", "#7f95ac");
    addBuilding(chunk, x - 62, y - 30, 124, 24, "policeAnnex", "#97abc0");
    addPoliceSpawn(chunk, x - 30, y + 58);
    addPoliceSpawn(chunk, x + 30, y + 58);
    addWalkTarget(chunk, x, y + 64);
    return;
  }

  if (id === "militaryBase") {
    addBuilding(chunk, x - 92, y - 58, 184, 104, "militaryBase", "#7e8a72");
    addBuilding(chunk, x - 64, y - 34, 128, 24, "militaryAnnex", "#95a18b");
    addMilitarySpawn(chunk, x - 42, y + 60);
    addMilitarySpawn(chunk, x, y + 60);
    addMilitarySpawn(chunk, x + 42, y + 60);
    addWalkTarget(chunk, x, y + 64);
    return;
  }

  if (id === "ciaBase") {
    addBuilding(chunk, x - 88, y - 52, 176, 88, "ciaBase", "#5e6067");
    addBuilding(chunk, x - 60, y - 30, 120, 20, "ciaAnnex", "#787b84");
    addCIASpawn(chunk, x - 18, y + 50);
    addCIASpawn(chunk, x + 18, y + 50);
    addWalkTarget(chunk, x, y + 58);
  }
}

function spawnMilitary(type) {
  const { cx, cy } = getChunkCoords(state.player.x, state.player.y);
  const rng = mulberry32(hash2d(cx * 31 + state.world.nextNpcId, cy * 17 - state.world.nextNpcId));
  const militarySpawns = getLoadedMilitarySpawns();
  const fallbackAllowed = isEnemySpreadUnlocked("military");
  const spawnPool =
    type === "helicopter"
      ? getHelicopterSpawnPoints(260)
      : (militarySpawns.length ? militarySpawns : (fallbackAllowed ? getLoadedWalkSpawns(240) : []));
  if (!spawnPool.length) {
    return false;
  }

  const spawnPoint = spawnPool[randomInt(rng, 0, spawnPool.length - 1)];
  state.world.npcs.push(createMilitaryNpc(type, spawnPoint, rng));
  state.world.nextNpcId += 1;
  return true;
}

function spawnMilitaryBossAt(x, y) {
  const chunk = getOrCreateChunkForPosition(x, y);
  if (!chunk) {
    return false;
  }
  const spawnPoint = { x, y, chunkKey: chunk.key };
  const rng = mulberry32(hash2d(Math.floor(x) * 23 + state.world.nextNpcId, Math.floor(y) * 29 - state.world.nextNpcId));
  state.world.npcs.push(createMilitaryBossNpc(spawnPoint, rng));
  state.world.nextNpcId += 1;
  state.world.militaryBossSpawned = true;
  state.world.alert = clamp(state.world.alert + 28, 0, 100);
  return true;
}

function spawnMilitaryBoss() {
  const militarySpawns = getLoadedMilitarySpawns().filter((spawn) => distanceBetween(spawn.x, spawn.y, state.player.x, state.player.y) > 320);
  const fallbackSpawns = getLoadedWalkSpawns(320);
  const sourcePool = militarySpawns.length ? militarySpawns : fallbackSpawns;
  if (!sourcePool.length) {
    return false;
  }
  const rng = mulberry32(hash2d(state.world.nextNpcId * 37, Math.floor(state.time * 21) + state.player.absorbedHumans * 9));
  const spawnPoint = sourcePool[randomInt(rng, 0, sourcePool.length - 1)];
  return spawnMilitaryBossAt(spawnPoint.x, spawnPoint.y);
}

function spawnAlien() {
  const { cx, cy } = getChunkCoords(state.player.x, state.player.y);
  const rng = mulberry32(hash2d(cx * 53 + state.world.nextNpcId, cy * 47 - state.world.nextNpcId));
  const spawnPool = getHelicopterSpawnPoints(320);
  if (!spawnPool.length) {
    return false;
  }
  const spawnPoint = spawnPool[randomInt(rng, 0, spawnPool.length - 1)];
  state.world.npcs.push(createAlienNpc(spawnPoint, rng));
  state.world.nextNpcId += 1;
  return true;
}

function spawnCIASquad() {
  const { cx, cy } = getChunkCoords(state.player.x, state.player.y);
  const rng = mulberry32(hash2d(cx * 41 + state.world.nextNpcId, cy * 29 - state.world.nextNpcId));
  const ciaSpawns = getLoadedCIASpawns();
  const roadSpawns = isEnemySpreadUnlocked("cia") ? getLoadedRoadSpawns(300) : [];
  const spawnPool = ciaSpawns.length ? ciaSpawns.map((spawn) => ({ ...spawn, roadType: "horizontal" })) : roadSpawns;
  if (!spawnPool.length) {
    return false;
  }

  const spawnPoint = spawnPool[randomInt(rng, 0, spawnPool.length - 1)];
  const squadId = `cia-${state.world.nextNpcId}-${Math.floor(state.time * 10)}`;
  const squadMode = rng() > 0.45 ? "driveBy" : "dismount";
  const groupSize = 3 + (rng() > 0.7 ? 1 : 0);
  for (let index = 0; index < groupSize; index += 1) {
    const offset = (index - (groupSize - 1) * 0.5) * 26;
    const offsetX = spawnPoint.roadType === "vertical" ? 0 : offset;
    const offsetY = spawnPoint.roadType === "vertical" ? offset : 0;
    state.world.npcs.push({
      id: state.world.nextNpcId,
      type: "cia",
      squadId,
      squadMode,
      x: spawnPoint.x + offsetX,
      y: spawnPoint.y + offsetY,
      vx: 0,
      vy: 0,
      radius: 8,
      homeChunkKey: spawnPoint.chunkKey,
      targetX: state.player.x,
      targetY: state.player.y,
      timer: 0,
      lastSeenTimer: 0,
      shootCooldown: randomBetween(rng, 0.1, 0.35),
      faceX: spawnPoint.roadType === "vertical" ? 0 : 1,
      faceY: spawnPoint.roadType === "vertical" ? 1 : 0,
      inVehicle: true,
      activeCar: null,
      carColor: "#111214",
      alive: true,
    });
    state.world.nextNpcId += 1;
  }
  return true;
}

function triggerCIAWormSummon(x, y, options = {}) {
  if (!state.world.ciaWorm) {
    state.world.ciaWorm = createCIAWormState();
  }
  const worm = state.world.ciaWorm;
  worm.portalX = x;
  worm.portalY = y;
  worm.x = x;
  worm.y = y;
  worm.targetX = x;
  worm.targetY = y;
  worm.dirX = 1;
  worm.dirY = 0;
  worm.trail = [];
  worm.dust = [];
  worm.holes = [];
  worm.quake = 0;
  worm.quakeEventTimer = options.immediate ? 3.5 : 2.4;
  worm.chompPhase = 0;
  worm.emergeApplied = false;
  state.world.ciaBossSpawned = true;

  if (options.immediate) {
    worm.active = true;
    worm.cutscene = false;
    worm.cutsceneTimer = 0;
    worm.mode = "underground";
    worm.timer = 1.4;
    worm.visible = false;
    worm.targetX = x + 180;
    worm.targetY = y + 120;
    return;
  }

  worm.active = false;
  worm.cutscene = true;
  worm.cutsceneTimer = 0;
  worm.mode = "cutscene";
  worm.visible = true;
  worm.timer = 0;
}

function getLoadedPoliceSpawns() {
  const spawns = [];
  for (const chunk of state.world.chunks.values()) {
    for (const spawn of chunk.policeSpawns) {
      spawns.push({ x: spawn.x, y: spawn.y, chunkKey: chunk.key });
    }
  }
  return spawns;
}

function getLoadedMilitarySpawns() {
  const spawns = [];
  for (const chunk of state.world.chunks.values()) {
    for (const spawn of chunk.militarySpawns) {
      spawns.push({ x: spawn.x, y: spawn.y, chunkKey: chunk.key });
    }
  }
  return spawns;
}

function getLoadedCIASpawns() {
  const spawns = [];
  for (const chunk of state.world.chunks.values()) {
    for (const spawn of chunk.ciaSpawns) {
      spawns.push({ x: spawn.x, y: spawn.y, chunkKey: chunk.key });
    }
  }
  return spawns;
}

function getLoadedDecorsByType(type) {
  const decors = [];
  for (const chunk of state.world.chunks.values()) {
    for (const deco of chunk.decor) {
      if ((Array.isArray(type) ? type.includes(deco.type) : deco.type === type) && !deco.destroyed) {
        decors.push(deco);
      }
    }
  }
  return decors;
}

function findNearestEscapeCar(npc, maxDistance = 220) {
  let best = null;
  let bestDistance = maxDistance;
  for (const car of getLoadedDecorsByType(["civilianCar", "policeCar", "ciaCar"])) {
    if (car.occupied || car.falling) {
      continue;
    }
    const carCenterX = car.x + car.w * 0.5;
    const carCenterY = car.y + car.h * 0.5;
    const distance = distanceBetween(npc.x, npc.y, carCenterX, carCenterY);
    if (distance < bestDistance) {
      best = car;
      bestDistance = distance;
    }
  }
  return best;
}

function spawnParkedCar(carType, x, y, homeChunkKey, color) {
  const chunk = getChunkAtPosition(x, y) || state.world.chunks.get(homeChunkKey);
  if (!chunk) {
    return null;
  }
  const width = carType === "ciaCar" ? 36 : carType === "policeCar" ? 30 : 32;
  const height = 20;
  const car = {
    type: carType,
    x: x - width * 0.5,
    y: y - height * 0.5,
    w: width,
    h: height,
    parked: true,
    occupied: false,
    color,
  };
  addDeco(chunk, car);
  return chunk.decor[chunk.decor.length - 1] || null;
}

function releaseNpcVehicle(npc, options = {}) {
  const carType =
    options.carType ||
    (npc.type === "police" ? "policeCar" :
    npc.type === "cia" ? "ciaCar" :
    "civilianCar");

  if (npc.activeCar && !npc.activeCar.destroyed) {
    npc.activeCar.x = npc.x - npc.activeCar.w * 0.5;
    npc.activeCar.y = npc.y - npc.activeCar.h * 0.5;
    npc.activeCar.occupied = false;
    npc.activeCar.parked = true;
    npc.activeCar = null;
    return;
  }

  spawnParkedCar(carType, npc.x, npc.y, npc.homeChunkKey, npc.carColor || options.color);
}

function getLoadedWalkSpawns(minDistance = 0) {
  const spawns = [];
  for (const chunk of state.world.chunks.values()) {
    for (const point of chunk.walkTargets) {
      if (distanceBetween(point.x, point.y, state.player.x, state.player.y) >= minDistance) {
        spawns.push({ x: point.x, y: point.y, chunkKey: chunk.key });
      }
    }
  }
  return spawns;
}

function getLoadedRoadSpawns(minDistance = 0) {
  const spawns = [];
  const tValues = [0.18, 0.42, 0.68, 0.88];
  for (const chunk of state.world.chunks.values()) {
    for (const road of chunk.roads.slice(0, 2)) {
      for (const t of tValues) {
        const point = sampleRectPerimeter(road, t);
        if (distanceBetween(point.x, point.y, state.player.x, state.player.y) >= minDistance) {
          spawns.push({ x: point.x, y: point.y, chunkKey: chunk.key, roadType: road.type });
        }
      }
    }
  }
  return spawns;
}

function getHelicopterSpawnPoints(minDistance = 0) {
  const spawns = [];
  for (const chunk of state.world.chunks.values()) {
    const points = [
      { x: chunk.originX + CONFIG.chunkSize * 0.15, y: chunk.originY + CONFIG.chunkSize * 0.12 },
      { x: chunk.originX + CONFIG.chunkSize * 0.82, y: chunk.originY + CONFIG.chunkSize * 0.15 },
      { x: chunk.originX + CONFIG.chunkSize * 0.18, y: chunk.originY + CONFIG.chunkSize * 0.84 },
      { x: chunk.originX + CONFIG.chunkSize * 0.84, y: chunk.originY + CONFIG.chunkSize * 0.82 },
    ];
    for (const point of points) {
      if (distanceBetween(point.x, point.y, state.player.x, state.player.y) >= minDistance) {
        spawns.push({ x: point.x, y: point.y, chunkKey: chunk.key });
      }
    }
  }
  return spawns;
}

function chooseAlienTrapPoint(rng) {
  const candidates = [
    ...getLoadedRoadSpawns(90),
    ...getLoadedWalkSpawns(90),
  ].filter((point) => distanceBetween(point.x, point.y, state.player.x, state.player.y) <= 320);

  if (candidates.length) {
    return candidates[randomInt(rng, 0, candidates.length - 1)];
  }

  const angle = rng() * Math.PI * 2;
  const distance = randomBetween(rng, 120, 260);
  const currentChunk = getChunkCoords(state.player.x, state.player.y);
  return {
    x: state.player.x + Math.cos(angle) * distance,
    y: state.player.y + Math.sin(angle) * distance,
    chunkKey: chunkKey(currentChunk.cx, currentChunk.cy),
  };
}

function spawnAlienTrap(kind, x, y, options = {}) {
  const trap = {
    kind,
    x,
    y,
    life: kind === "gas" ? CONFIG.gasLifetime : CONFIG.trapLifetime,
    armedTimer: kind === "gas" ? 0.1 : 0.45,
    tickTimer: 0,
    radius:
      kind === "gas" ? 56 :
      kind === "mine" || kind === "teleportMine" ? 11 :
      0,
  };

  if (kind === "tripwire") {
    const angle = options.angle ?? Math.random() * Math.PI * 2;
    const length = options.length ?? randomBetween(Math.random, 90, 150);
    trap.x2 = x + Math.cos(angle) * length;
    trap.y2 = y + Math.sin(angle) * length;
    trap.triggered = false;
    trap.strikeLife = 0;
  }

  state.world.traps.push(trap);
  if (state.world.traps.length > 40) {
    state.world.traps.splice(0, state.world.traps.length - 40);
  }
}

function teleportPlayerRandomly() {
  const rng = mulberry32(hash2d(Math.floor(state.time * 1000), state.player.absorbedHumans * 53 + state.world.traps.length));
  const origin = getChunkCoords(state.player.x, state.player.y);
  let offsetX = randomInt(rng, -4, 4);
  let offsetY = randomInt(rng, -4, 4);
  if (offsetX === 0 && offsetY === 0) {
    offsetX = 3;
  }

  state.player.x = (origin.cx + offsetX) * CONFIG.chunkSize + CONFIG.chunkSize * randomBetween(rng, 0.25, 0.75);
  state.player.y = (origin.cy + offsetY) * CONFIG.chunkSize + CONFIG.chunkSize * randomBetween(rng, 0.25, 0.75);
  ensureChunksAroundPlayer();

  const destinations = getLoadedWalkSpawns(0);
  const destination = destinations.length
    ? destinations[randomInt(rng, 0, destinations.length - 1)]
    : { x: state.player.x, y: state.player.y };

  state.player.x = destination.x;
  state.player.y = destination.y;
  state.player.vx = 0;
  state.player.vy = 0;
  ensureChunksAroundPlayer();
}

function getSquadMates(type, squadId) {
  return state.world.npcs.filter((npc) => npc.type === type && npc.squadId === squadId && npc.alive);
}

function createPoliceNpc(spawnPoint, rng, options = {}) {
  return {
    id: state.world.nextNpcId,
    type: "police",
    x: spawnPoint.x,
    y: spawnPoint.y,
    vx: 0,
    vy: 0,
    radius: 8,
    homeChunkKey: spawnPoint.chunkKey,
    targetX: state.player.x,
    targetY: state.player.y,
    timer: 0,
    lastSeenTimer: 0,
    shootCooldown: randomBetween(rng, 0.2, 0.7),
    faceX: options.faceX ?? -1,
    faceY: options.faceY ?? 0,
    inVehicle: options.inVehicle ?? (rng() > 0.28),
    activeCar: null,
    carColor: "#1d3156",
    alive: true,
  };
}

function spawnPolice() {
  const { cx, cy } = getChunkCoords(state.player.x, state.player.y);
  const rng = mulberry32(hash2d(cx + state.world.nextNpcId, cy - state.world.nextNpcId));
  const stationSpawns = getLoadedPoliceSpawns().filter((spawn) => distanceBetween(spawn.x, spawn.y, state.player.x, state.player.y) > 180);
  const fallbackSpawns = isEnemySpreadUnlocked("police") ? getLoadedWalkSpawns(180) : [];
  const sourcePool = stationSpawns.length ? stationSpawns : fallbackSpawns;
  if (!sourcePool.length) {
    return false;
  }

  const spawnPoint = sourcePool[randomInt(rng, 0, sourcePool.length - 1)];
  const chunk = state.world.chunks.get(spawnPoint.chunkKey);
  if (!chunk) {
    return false;
  }

  state.world.npcs.push(createPoliceNpc(spawnPoint, rng));
  state.world.nextNpcId += 1;
  return true;
}

function spawnPoliceBossAt(x, y) {
  const chunk = getOrCreateChunkForPosition(x, y);
  if (!chunk) {
    return false;
  }
  const spawnPoint = { x, y, chunkKey: chunk.key };
  const rng = mulberry32(hash2d(Math.floor(x) * 17 + state.world.nextNpcId, Math.floor(y) * 19 - state.world.nextNpcId));
  state.world.npcs.push(createPoliceBossNpc(spawnPoint, rng));
  state.world.nextNpcId += 1;
  state.world.policeBossSpawned = true;
  state.world.alert = clamp(state.world.alert + 24, 0, 100);
  return true;
}

function spawnPoliceBoss() {
  const roadSpawns = getLoadedRoadSpawns(260).filter((spawn) => distanceBetween(spawn.x, spawn.y, state.player.x, state.player.y) > 300);
  const stationSpawns = getLoadedPoliceSpawns().filter((spawn) => distanceBetween(spawn.x, spawn.y, state.player.x, state.player.y) > 300);
  const sourcePool = stationSpawns.length ? stationSpawns : roadSpawns;
  if (!sourcePool.length) {
    return false;
  }
  const rng = mulberry32(hash2d(state.world.nextNpcId * 11, Math.floor(state.time * 17) + state.player.absorbedHumans * 13));
  const spawnPoint = sourcePool[randomInt(rng, 0, sourcePool.length - 1)];
  return spawnPoliceBossAt(spawnPoint.x, spawnPoint.y);
}

function getPlayerVisibilityRadius() {
  return state.player.radius + Math.sqrt(state.player.followers.length) * 3.4;
}

function getPlayerAbsorbRadius() {
  return CONFIG.absorbRangeBase + Math.sqrt(state.player.followers.length) * CONFIG.absorbRangeGrowth;
}

function canReachFlyingEnemy(npc) {
  const size = state.player.absorbedHumans;
  if (size < 22) {
    return false;
  }

  const altitude = npc.altitude || 0;
  const horizontalDistance = distanceBetween(npc.x, npc.y, state.player.x, state.player.y);
  const horizontalReach = getPlayerAbsorbRadius() + state.player.radius * 0.9 + Math.sqrt(size) * 2.8;
  const verticalReach = state.player.radius * 1.6 + Math.sqrt(state.player.followers.length + 1) * 3.8;
  return horizontalDistance <= horizontalReach + npc.radius && altitude <= verticalReach;
}

function canSeePlayer(npc, visionRange, ignoreLOS = false) {
  const lightFactor = 0.72 + getDayNightState().daylight * 0.42;
  const distance = distanceBetween(npc.x, npc.y, state.player.x, state.player.y);
  if (distance > visionRange * lightFactor + getPlayerVisibilityRadius()) {
    return false;
  }
  return ignoreLOS || !lineOfSightBlocked(npc.x, npc.y, state.player.x, state.player.y);
}

function chooseNearbyWalkTarget(npc) {
  const homeChunk = state.world.chunks.get(npc.homeChunkKey);
  if (!homeChunk) {
    return { x: npc.x, y: npc.y };
  }
  const rng = mulberry32(hash2d(npc.id, Math.floor(state.time * 10)));
  return sampleWalkTarget(homeChunk, rng);
}

function choosePolicePatrolTarget(npc) {
  const homeChunk = state.world.chunks.get(npc.homeChunkKey);
  if (!homeChunk) {
    return { x: npc.x, y: npc.y };
  }
  const rng = mulberry32(hash2d(npc.id * 5, Math.floor(state.time * 8)));
  if (npc.inVehicle && homeChunk.roads.length) {
    const road = homeChunk.roads[randomInt(rng, 0, Math.min(1, homeChunk.roads.length - 1))];
    return sampleRectPerimeter(road, rng());
  }
  return sampleWalkTarget(homeChunk, rng);
}

function chooseCIAPatrolTarget(npc) {
  const homeChunk = state.world.chunks.get(npc.homeChunkKey);
  if (!homeChunk) {
    return { x: npc.x, y: npc.y };
  }
  const rng = mulberry32(hash2d(npc.id * 9, Math.floor(state.time * 6)));
  if (npc.inVehicle && homeChunk.roads.length) {
    const road = homeChunk.roads[randomInt(rng, 0, Math.min(1, homeChunk.roads.length - 1))];
    return sampleRectPerimeter(road, rng());
  }
  return sampleWalkTarget(homeChunk, rng);
}

function chooseCivilianVehicleTarget(npc) {
  const homeChunk = state.world.chunks.get(npc.homeChunkKey);
  if (!homeChunk) {
    return { x: npc.x, y: npc.y };
  }
  const rng = mulberry32(hash2d(npc.id * 3, Math.floor(state.time * 7)));
  const road = homeChunk.roads[randomInt(rng, 0, Math.min(1, homeChunk.roads.length - 1))];
  return sampleRectPerimeter(road, rng());
}

function getLoadedRoadRects() {
  const roads = [];
  for (const chunk of state.world.chunks.values()) {
    for (const road of chunk.roads.slice(0, 2)) {
      roads.push(road);
    }
  }
  return roads;
}

function getNearestRoadPoint(x, y) {
  let best = { x, y, distance: Infinity };
  for (const road of getLoadedRoadRects()) {
    const nearestX = clamp(x, road.x, road.x + road.w);
    const nearestY = clamp(y, road.y, road.y + road.h);
    const distance = distanceBetween(x, y, nearestX, nearestY);
    if (distance < best.distance) {
      best = { x: nearestX, y: nearestY, distance };
    }
  }
  return best;
}

function steerRoadVehicle(entity, targetX, targetY, accel, speedLimit, dt) {
  const selfRoad = getNearestRoadPoint(entity.x, entity.y);
  const targetRoad = getNearestRoadPoint(targetX, targetY);
  const followX = selfRoad.distance > 12 ? selfRoad.x : targetRoad.x;
  const followY = selfRoad.distance > 12 ? selfRoad.y : targetRoad.y;
  steerEntity(entity, followX, followY, accel, speedLimit, dt);
}

function chooseCivilianRoadEscapeTarget(npc) {
  const roadTargets = getLoadedRoadSpawns(0);
  if (!roadTargets.length) {
    return chooseCivilianVehicleTarget(npc);
  }

  let best = roadTargets[0];
  let bestScore = -Infinity;
  for (const target of roadTargets) {
    const score =
      distanceBetween(target.x, target.y, state.player.x, state.player.y) -
      distanceBetween(target.x, target.y, npc.x, npc.y) * 0.35;
    if (score > bestScore) {
      best = target;
      bestScore = score;
    }
  }
  return best;
}

function getNearbyVehicleObstacle(npc) {
  const checkRadius = 46;
  for (const building of getLoadedBuildings()) {
    if (circleIntersectsRect(npc.x, npc.y, checkRadius, building)) {
      return { x: building.x + building.w * 0.5, y: building.y + building.h * 0.5, color: building.chipColor || "#8a8a8a" };
    }
  }
  for (const deco of getLoadedDecorsByType("tree")) {
    if (distanceBetween(npc.x, npc.y, deco.x, deco.y) < checkRadius) {
      return { x: deco.x, y: deco.y, color: "#4e7654" };
    }
  }
  for (const deco of getLoadedDecorsByType("lamp")) {
    if (distanceBetween(npc.x, npc.y, deco.x, deco.y) < checkRadius) {
      return { x: deco.x, y: deco.y, color: "#7b7e86" };
    }
  }
  for (const other of state.world.npcs) {
    if (other === npc || !other.inCar || !other.alive) {
      continue;
    }
    if (distanceBetween(npc.x, npc.y, other.x, other.y) < 34) {
      return { x: other.x, y: other.y, color: other.carColor || "#555" };
    }
  }
  return null;
}

function crashCivilianVehicle(npc, obstacle) {
  releaseNpcVehicle(npc, { carType: "civilianCar", color: npc.carColor });
  npc.inCar = false;
  npc.radius = 7;
  npc.crashedTimer = 2.6;
  npc.escapeCar = null;
  npc.activeCar = null;
  spawnDebrisBurst(npc.x, npc.y, npc.carColor || "#666", 10, npc.vx * 0.6, npc.vy * 0.6, 5);
  spawnVisualBurst(npc.x, npc.y, 26, "rgba(255, 188, 96, 0.85)");
  spawnBloodStamp(npc.x, npc.y, 3.6, 1, npc.vx * 1.4, npc.vy * 1.4);
  npc.vx *= 0.3;
  npc.vy *= 0.3;
  npc.fearTimer = Math.max(npc.fearTimer, 2.2);
  if (obstacle && Math.random() < 0.45) {
    playScreamSound(1.1);
  }
}

function steerEntity(entity, targetX, targetY, accel, speedLimit, dt) {
  const dx = targetX - entity.x;
  const dy = targetY - entity.y;
  const distance = Math.hypot(dx, dy) || 0.0001;
  entity.vx += (dx / distance) * accel * dt * 60;
  entity.vy += (dy / distance) * accel * dt * 60;
  entity.vx *= 0.9;
  entity.vy *= 0.9;

  const speed = Math.hypot(entity.vx, entity.vy);
  if (speed > speedLimit) {
    const factor = speedLimit / speed;
    entity.vx *= factor;
    entity.vy *= factor;
  }

  if (speed > 0.02) {
    entity.faceX = entity.vx / speed;
    entity.faceY = entity.vy / speed;
  }

  entity.x += entity.vx;
  entity.y += entity.vy;
  resolveEntityAgainstBuildings(entity, entity.radius);
}

function gainBiomass(amount, sourceX, sourceY) {
  for (let index = 0; index < amount; index += 1) {
    state.player.followers.push({
      x: sourceX + (Math.random() - 0.5) * 10,
      y: sourceY + (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: CONFIG.followerRadius + Math.random() * 0.8,
    });
  }
}

function shedPlayerBiomass(lossCount, sourceX, sourceY) {
  const amount = Math.min(lossCount, state.player.followers.length);
  for (let index = 0; index < amount; index += 1) {
    const follower = state.player.followers.pop();
    if (!follower) {
      break;
    }
    spawnDebrisBurst(
      follower.x,
      follower.y,
      "rgba(140, 16, 16, 0.92)",
      2,
      follower.x - sourceX,
      follower.y - sourceY,
      Math.max(2, follower.radius * 0.9),
    );
    spawnBloodStamp(follower.x, follower.y, 3.4, 1, follower.vx * 1.8, follower.vy * 1.8);
  }
}

function damagePlayer(amount, sourceX, sourceY, push = 0.7) {
  state.player.health = clamp(state.player.health - amount, 0, state.player.maxHealth);
  const dx = state.player.x - sourceX;
  const dy = state.player.y - sourceY;
  const distance = Math.hypot(dx, dy) || 0.0001;
  state.player.vx += (dx / distance) * push;
  state.player.vy += (dy / distance) * push;
  const biomassLoss = Math.max(0, Math.min(state.player.followers.length, Math.floor(amount / 5) + Math.floor(Math.sqrt(amount))));
  if (biomassLoss > 0) {
    shedPlayerBiomass(biomassLoss, sourceX, sourceY);
  }
  if (state.player.health <= 0) {
    state.gameOver = true;
  }
}

function spawnTracer(x1, y1, x2, y2, color, width, life) {
  state.world.tracers.push({
    x1,
    y1,
    x2,
    y2,
    color,
    width,
    life,
    maxLife: life,
  });
}

function explodeAt(x, y, radius, damage, color) {
  state.world.explosions.push({
    x,
    y,
    radius,
    life: CONFIG.explosionLifetime,
    maxLife: CONFIG.explosionLifetime,
    color,
  });
  spawnBloodStamp(x, y, Math.max(8, radius * 0.16), 3, 0, 0);
  if (distanceBetween(x, y, state.player.x, state.player.y) <= radius + state.player.radius) {
    damagePlayer(damage, x, y, 1.2);
  }
}

function launchExplosive(npc, options) {
  const dx = state.player.x - npc.x;
  const dy = state.player.y - npc.y;
  const distance = Math.hypot(dx, dy) || 0.0001;
  npc.faceX = dx / distance;
  npc.faceY = dy / distance;
  state.world.projectiles.push({
    kind: options.kind,
    x: npc.x + npc.faceX * options.offset,
    y: npc.y + npc.faceY * options.offset,
    vx: npc.faceX * options.speed,
    vy: npc.faceY * options.speed,
    life: options.life,
    radius: options.radius,
    blastRadius: options.blastRadius,
    damage: options.damage,
    color: options.color,
    ownerType: npc.type,
  });
}

function absorbNpc(npc) {
  if (npc.type === "civilian" && npc.inCar) {
    releaseNpcVehicle(npc, { carType: "civilianCar", color: npc.carColor });
  } else if (npc.type === "police" && npc.inVehicle) {
    releaseNpcVehicle(npc, { carType: "policeCar", color: npc.carColor });
  } else if (npc.type === "cia" && npc.inVehicle) {
    releaseNpcVehicle(npc, { carType: "ciaCar", color: npc.carColor });
  }
  if (npc.type === "police" || npc.type === "policeBoss") {
    state.world.policeDeathsTotal += 1;
  }
  if (["militarySoldier", "militaryGrenadier", "tank", "helicopter", "militaryBoss"].includes(npc.type)) {
    state.world.militaryDeathsTotal += npc.type === "militaryBoss" ? 6 : 1;
  }
  if (npc.type === "cia") {
    state.world.ciaDeathsTotal += 1;
  }
  npc.alive = false;
  state.player.absorbedHumans += 1;
  const biomass =
    npc.type === "militaryBoss" ? CONFIG.biomatterPerHuman + 12 :
    npc.type === "tank" ? CONFIG.biomatterPerHuman + 4 :
    npc.type === "helicopter" ? CONFIG.biomatterPerHuman + 3 :
    npc.type === "policeBoss" ? CONFIG.biomatterPerHuman + 6 :
    npc.type === "police" || npc.type === "militarySoldier" || npc.type === "militaryGrenadier" ? CONFIG.biomatterPerHuman + 1 :
    CONFIG.biomatterPerHuman;
  gainBiomass(biomass, npc.x, npc.y);
  const alertGain =
    npc.type === "militaryBoss" ? 48 :
    npc.type === "policeBoss" ? 34 :
    npc.type === "police" ? 18 :
    npc.type === "militarySoldier" || npc.type === "militaryGrenadier" ? 22 :
    npc.type === "tank" || npc.type === "helicopter" ? 28 :
    9;
  state.world.alert = clamp(state.world.alert + alertGain, 0, 100);
  state.player.health = clamp(state.player.health + 1.5, 0, state.player.maxHealth);
  const tornIntensity = 1 + Math.min(3.2, Math.sqrt(state.player.followers.length) * 0.18);
  const wasTornBySwarm = Boolean(npc.wasGrabbedBySwarm);
  spawnBloodStamp(npc.x, npc.y, 9 + state.player.followers.length * 0.06, 4 + (wasTornBySwarm ? 2 : 0), state.player.vx * 4.5, state.player.vy * 4.5);
  spawnBloodStamp(
    npc.x + (Math.random() - 0.5) * 12,
    npc.y + (Math.random() - 0.5) * 12,
    5.5 + tornIntensity * 1.2,
    2 + (wasTornBySwarm ? 1 : 0),
    -state.player.vx * 2.4,
    -state.player.vy * 2.4,
  );
  spawnOrganicBurst(
    npc.x,
    npc.y,
    tornIntensity + (wasTornBySwarm ? 0.7 : 0),
    state.player.vx * 1.8,
    state.player.vy * 1.8,
    { minCount: wasTornBySwarm ? 1 : 0 },
  );
  playScreamSound(npc.type === "civilian" ? 1.2 : 0.9);
  playAssimilationSound(1 + state.player.followers.length / 70);
}

function killNpcByWorm(npc) {
  if (npc.type === "civilian" && npc.inCar) {
    releaseNpcVehicle(npc, { carType: "civilianCar", color: npc.carColor });
  } else if ((npc.type === "police" || npc.type === "policeBoss") && npc.inVehicle) {
    releaseNpcVehicle(npc, { carType: "policeCar", color: npc.carColor });
  } else if (npc.type === "cia" && npc.inVehicle) {
    releaseNpcVehicle(npc, { carType: "ciaCar", color: npc.carColor });
  }

  if (npc.type === "police" || npc.type === "policeBoss") {
    state.world.policeDeathsTotal += 1;
  }
  if (["militarySoldier", "militaryGrenadier", "tank", "helicopter", "militaryBoss"].includes(npc.type)) {
    state.world.militaryDeathsTotal += npc.type === "militaryBoss" ? 6 : 1;
  }
  if (npc.type === "cia") {
    state.world.ciaDeathsTotal += 1;
  }

  npc.alive = false;
  spawnBloodStamp(npc.x, npc.y, 10 + npc.radius * 0.5, 4, npc.vx * 2.4, npc.vy * 2.4);
  spawnOrganicBurst(npc.x, npc.y, 1.8 + npc.radius * 0.08, npc.vx * 0.8, npc.vy * 0.8, { minCount: 1 });
}

function wormCircleHitsDecor(x, y, radius, deco) {
  if (deco.type === "tree") {
    return distanceBetween(x, y, deco.x, deco.y) <= radius + deco.size;
  }
  if (deco.type === "lamp") {
    return circleIntersectsRect(x, y, radius, {
      x: deco.x - 6,
      y: deco.y - (deco.height || 18) - 2,
      w: 12,
      h: (deco.height || 18) + 4,
    });
  }
  if (deco.type === "policeCar" || deco.type === "civilianCar" || deco.type === "ciaCar") {
    return circleIntersectsRect(x, y, radius, deco);
  }
  return false;
}

function destroyWorldWithWorm(x, y, radius) {
  for (const npc of state.world.npcs) {
    if (!npc.alive) {
      continue;
    }
    if (distanceBetween(x, y, npc.x, npc.y) <= radius + npc.radius) {
      killNpcByWorm(npc);
    }
  }

  if (distanceBetween(x, y, state.player.x, state.player.y) <= radius + state.player.radius) {
    state.player.health = 0;
    state.gameOver = true;
  }

  for (const chunk of state.world.chunks.values()) {
    for (const building of chunk.buildings) {
      if (building.destroyed) {
        continue;
      }
      if (circleIntersectsRect(x, y, radius, building)) {
        building.integrity = 0;
        building.baseIntegrity = 0;
        building.falling = true;
        building.fallDirection = x >= building.x + building.w * 0.5 ? 1 : -1;
        spawnDebrisBurst(building.x + building.w * 0.5, building.y + building.h * 0.5, building.chipColor, 18, building.fallDirection * 1.2, 0.6, 6);
      }
    }
    for (const deco of chunk.decor) {
      if (deco.destroyed) {
        continue;
      }
      if (wormCircleHitsDecor(x, y, radius, deco)) {
        deco.destroyed = true;
        deco.falling = false;
        spawnDebrisBurst(deco.x, deco.y, deco.chipColor || "#777", 9, 0.8, 0.2, 4);
      }
    }
  }
}

function shootPlayer(npc, options = {}) {
  const ignoreLOS = options.ignoreLOS || false;
  if (!ignoreLOS && lineOfSightBlocked(npc.x, npc.y, state.player.x, state.player.y)) {
    return;
  }

  const dx = state.player.x - npc.x;
  const dy = state.player.y - npc.y;
  const distance = Math.hypot(dx, dy) || 0.0001;
  const jitter = options.jitter || 0;
  const aimX = (dx / distance) + (Math.random() - 0.5) * jitter;
  const aimY = (dy / distance) + (Math.random() - 0.5) * jitter;
  const aimDistance = Math.hypot(aimX, aimY) || 0.0001;
  npc.faceX = aimX / aimDistance;
  npc.faceY = aimY / aimDistance;
  const muzzleDistance = options.muzzleDistance ?? (npc.inVehicle ? 18 : 10);
  const color = options.color || "rgba(255, 214, 92, 1)";
  const width = options.width || 2.4;
  const life = options.life || CONFIG.tracerLifetime;

  spawnTracer(
    npc.x + npc.faceX * muzzleDistance,
    npc.y + npc.faceY * muzzleDistance,
    state.player.x,
    state.player.y,
    color,
    width,
    life,
  );
  damagePlayer(options.damage ?? CONFIG.damagePerShot, npc.x, npc.y, options.push ?? 0.7);
}

function shootShotgunPlayer(npc) {
  if (lineOfSightBlocked(npc.x, npc.y, state.player.x, state.player.y)) {
    return;
  }

  const dx = state.player.x - npc.x;
  const dy = state.player.y - npc.y;
  const distance = Math.hypot(dx, dy) || 0.0001;
  const baseAngle = Math.atan2(dy, dx);
  npc.faceX = dx / distance;
  npc.faceY = dy / distance;
  const pelletCount = CONFIG.policeBossShotgunPellets;
  const spread = 0.38;
  let hits = 0;

  for (let index = 0; index < pelletCount; index += 1) {
    const t = pelletCount === 1 ? 0.5 : index / (pelletCount - 1);
    const angle = baseAngle + (t - 0.5) * spread;
    const dirX = Math.cos(angle);
    const dirY = Math.sin(angle);
    const muzzleX = npc.x + dirX * 16;
    const muzzleY = npc.y + dirY * 16;
    const endX = muzzleX + dirX * Math.min(distance + 30, CONFIG.policeBossDesiredRange + 100);
    const endY = muzzleY + dirY * Math.min(distance + 30, CONFIG.policeBossDesiredRange + 100);
    spawnTracer(muzzleX, muzzleY, endX, endY, "rgba(255, 228, 172, 1)", 2.4, 0.12);

    const projection = (state.player.x - muzzleX) * dirX + (state.player.y - muzzleY) * dirY;
    const closestX = muzzleX + dirX * clamp(projection, 0, distance + 30);
    const closestY = muzzleY + dirY * clamp(projection, 0, distance + 30);
    const missDistance = distanceBetween(closestX, closestY, state.player.x, state.player.y);
    if (missDistance <= state.player.radius + 10) {
      hits += 1;
    }
  }

  if (hits > 0) {
    damagePlayer(CONFIG.policeBossPelletDamage * hits, npc.x, npc.y, 1.4);
  }
}

function callPoliceBossReinforcements(npc) {
  if (npc.reinforcementCalls >= CONFIG.policeBossMaxReinforcementCalls || npc.reinforcementCooldown > 0) {
    return;
  }
  npc.reinforcementCalls += 1;
  npc.reinforcementCooldown = CONFIG.policeBossReinforcementCooldown;
  npc.disengageTimer = Math.max(npc.disengageTimer, CONFIG.policeBossDisengageTime + 1.5);
  const rng = mulberry32(hash2d(npc.id * 31, Math.floor(state.time * 20) + state.world.nextNpcId));
  const reinforcements = 3 + Math.min(2, npc.reinforcementCalls - 1);
  for (let index = 0; index < reinforcements; index += 1) {
    const angle = randomBetween(rng, 0, Math.PI * 2);
    const distance = randomBetween(rng, 70, 120);
    const x = npc.x + Math.cos(angle) * distance;
    const y = npc.y + Math.sin(angle) * distance;
    const chunk = getOrCreateChunkForPosition(x, y);
    if (!chunk) {
      continue;
    }
    const spawnPoint = { x, y, chunkKey: chunk.key };
    state.world.npcs.push(createPoliceNpc(spawnPoint, rng, { inVehicle: index < Math.min(3, reinforcements - 1) }));
    state.world.nextNpcId += 1;
  }
}

function updateCivilian(npc, dt) {
  npc.crashedTimer = Math.max(0, (npc.crashedTimer || 0) - dt);
  const touchingSwarm = getNpcSwarmContact(npc);
  if (canSeePlayer(npc, CONFIG.civilianVision)) {
    npc.fearTimer = 2.8;
    state.world.alert = clamp(state.world.alert + 16 * dt, 0, 100);
  } else {
    npc.fearTimer = Math.max(0, npc.fearTimer - dt);
  }

  if (distanceBetween(npc.x, npc.y, state.player.x, state.player.y) < getPlayerAbsorbRadius() + npc.radius) {
    absorbNpc(npc);
    return;
  }

  if (npc.fearTimer > 0 && !npc.panicSounded) {
    playScreamSound(0.9 + Math.random() * 0.5);
    npc.panicSounded = true;
  } else if (npc.fearTimer <= 0.1) {
    npc.panicSounded = false;
  }

  if (npc.inCar) {
    npc.radius = 10;
    npc.runSoundTimer -= dt;
    if (npc.runSoundTimer <= 0) {
      playRunSound(0.7 + Math.random() * 0.4);
      npc.runSoundTimer = npc.fearTimer > 0 ? 0.22 + Math.random() * 0.15 : 0.34 + Math.random() * 0.18;
    }

    if (npc.fearTimer > 0) {
      const playerDistance = distanceBetween(npc.x, npc.y, state.player.x, state.player.y);
      if (playerDistance < 125) {
        const dx = npc.x - state.player.x;
        const dy = npc.y - state.player.y;
        const away = Math.hypot(dx, dy) || 0.0001;
        const side = npc.id % 2 === 0 ? 1 : -1;
        const steerX = npc.x + (dx / away) * 220 + (-dy / away) * side * 90;
        const steerY = npc.y + (dy / away) * 220 + (dx / away) * side * 90;
        steerEntity(npc, steerX, steerY, 0.11, 4.1, dt);
      } else {
        npc.timer -= dt;
        if (npc.timer <= 0 || distanceBetween(npc.x, npc.y, npc.targetX, npc.targetY) < 24) {
          const target = chooseCivilianRoadEscapeTarget(npc);
          npc.targetX = target.x;
          npc.targetY = target.y;
          npc.timer = 0.9 + Math.random() * 1.2;
        }
        steerRoadVehicle(npc, npc.targetX, npc.targetY, 0.08, 3.55, dt);
      }
    } else {
      npc.timer -= dt;
      if (npc.timer <= 0 || distanceBetween(npc.x, npc.y, npc.targetX, npc.targetY) < 20) {
        const target = chooseCivilianVehicleTarget(npc);
        npc.targetX = target.x;
        npc.targetY = target.y;
        npc.timer = 1.3 + Math.random() * 1.8;
      }
      steerRoadVehicle(npc, npc.targetX, npc.targetY, 0.05, 2.9, dt);
    }

    if (npc.fearTimer > 0 && npc.crashedTimer <= 0) {
      const obstacle = getNearbyVehicleObstacle(npc);
      const playerDistance = distanceBetween(npc.x, npc.y, state.player.x, state.player.y);
      const roadDistance = getNearestRoadPoint(npc.x, npc.y).distance;
      const crashChance =
        playerDistance < 125 ? 5.2 :
        roadDistance > 18 ? 3.9 :
        2.2;
      if (obstacle && Math.random() < dt * crashChance) {
        crashCivilianVehicle(npc, obstacle);
      }
    }
    return;
  }

  if (touchingSwarm) {
    npc.fearTimer = Math.max(npc.fearTimer, 1.5);
    state.world.alert = clamp(state.world.alert + 12 * dt, 0, 100);
    dragNpcIntoSwarm(npc, touchingSwarm, dt);
    if (Math.random() < Math.min(0.85, dt * (1.8 + touchingSwarm.touchCount * 0.3))) {
      playScreamSound(0.75 + touchingSwarm.touchCount * 0.08);
    }
    return;
  }

  if (npc.fearTimer > 0) {
    if ((!npc.escapeCar || npc.escapeCar.destroyed || npc.escapeCar.occupied) && npc.crashedTimer <= 0) {
      npc.escapeCar = findNearestEscapeCar(npc);
    }
    if (npc.escapeCar) {
      const carCenterX = npc.escapeCar.x + npc.escapeCar.w * 0.5;
      const carCenterY = npc.escapeCar.y + npc.escapeCar.h * 0.5;
      steerEntity(npc, carCenterX, carCenterY, 0.075, CONFIG.civilianFleeSpeed + 0.55, dt);
      if (distanceBetween(npc.x, npc.y, carCenterX, carCenterY) < 18) {
        npc.escapeCar.occupied = true;
        npc.inCar = true;
        npc.carColor = npc.escapeCar.color || npc.carColor;
        npc.escapeCar.destroyed = true;
        npc.activeCar = null;
        npc.escapeCar = null;
        npc.radius = 10;
        const roadPoint = getNearestRoadPoint(npc.x, npc.y);
        npc.targetX = roadPoint.x;
        npc.targetY = roadPoint.y;
        npc.timer = 0.5;
      }
      return;
    }
    npc.runSoundTimer -= dt;
    if (npc.runSoundTimer <= 0) {
      playRunSound(0.8 + Math.random() * 0.4);
      npc.runSoundTimer = 0.16 + Math.random() * 0.22;
    }
    const dx = npc.x - state.player.x;
    const dy = npc.y - state.player.y;
    const away = Math.hypot(dx, dy) || 0.0001;
    steerEntity(npc, npc.x + (dx / away) * 160, npc.y + (dy / away) * 160, 0.11, CONFIG.civilianFleeSpeed, dt);
  } else {
    npc.escapeCar = null;
    npc.runSoundTimer = Math.max(npc.runSoundTimer, 0.08);
    npc.timer -= dt;
    if (npc.timer <= 0 || distanceBetween(npc.x, npc.y, npc.targetX, npc.targetY) < 18) {
      const target = chooseNearbyWalkTarget(npc);
      npc.targetX = target.x;
      npc.targetY = target.y;
      npc.timer = 2 + Math.random() * 3;
    }
    steerEntity(npc, npc.targetX, npc.targetY, 0.055, CONFIG.civilianSpeed, dt);
  }
}

function updateAnimal(npc, dt) {
  const distance = distanceBetween(npc.x, npc.y, state.player.x, state.player.y);
  if (distance < getPlayerAbsorbRadius() + npc.radius) {
    absorbNpc(npc);
    return;
  }

  const fleeRange = npc.species === "bear" || npc.species === "moose" ? 90 : 70;
  if (distance < fleeRange && !npc.penned) {
    const dx = npc.x - state.player.x;
    const dy = npc.y - state.player.y;
    const away = Math.hypot(dx, dy) || 0.0001;
    steerEntity(npc, npc.x + (dx / away) * 120, npc.y + (dy / away) * 120, 0.09, 1.9 + npc.radius * 0.04, dt);
    return;
  }

  npc.timer -= dt;
  if (npc.timer <= 0 || distanceBetween(npc.x, npc.y, npc.targetX, npc.targetY) < 12) {
    const target = chooseNearbyWalkTarget(npc);
    npc.targetX = npc.penned ? lerp(npc.x, target.x, 0.25) : target.x;
    npc.targetY = npc.penned ? lerp(npc.y, target.y, 0.25) : target.y;
    npc.timer = 1.8 + Math.random() * 2.6;
  }
  steerEntity(npc, npc.targetX, npc.targetY, 0.04, 0.85 + npc.radius * 0.03, dt);
}

function updateBird(npc, dt) {
  if (distanceBetween(npc.x, npc.y, state.player.x, state.player.y) < getPlayerAbsorbRadius() + npc.radius + 6) {
    absorbNpc(npc);
    return;
  }
  npc.timer -= dt;
  if (npc.timer <= 0) {
    npc.targetX += randomBetween(Math.random, -80, 80);
    npc.targetY += randomBetween(Math.random, -50, 50);
    npc.timer = 0.6 + Math.random() * 1.4;
  }
  const dx = npc.targetX - npc.x;
  const dy = npc.targetY - npc.y;
  const distance = Math.hypot(dx, dy) || 0.0001;
  npc.vx += (dx / distance) * 0.06 * dt * 60;
  npc.vy += (dy / distance) * 0.05 * dt * 60;
  npc.vx *= 0.96;
  npc.vy *= 0.96;
  const speed = Math.hypot(npc.vx, npc.vy);
  if (speed > 2.2) {
    const factor = 2.2 / speed;
    npc.vx *= factor;
    npc.vy *= factor;
  }
  npc.x += npc.vx;
  npc.y += npc.vy;
  if (speed > 0.02) {
    npc.faceX = npc.vx / speed;
    npc.faceY = npc.vy / speed;
  }
}

function updatePolice(npc, dt) {
  const seesPlayer = canSeePlayer(npc, CONFIG.policeVision);
  const distance = distanceBetween(npc.x, npc.y, state.player.x, state.player.y);
  const touchingSwarm = getNpcSwarmContact(npc);
  const chaseSpeed = CONFIG.policeChaseSpeed + (npc.inVehicle ? 1.5 : 0);
  const patrolSpeed = CONFIG.policePatrolSpeed + (npc.inVehicle ? 1.05 : 0);
  const desiredRange = CONFIG.policeDesiredRange + (npc.inVehicle ? 58 : 0);

  if (distance < getPlayerAbsorbRadius() + npc.radius * 0.9) {
    absorbNpc(npc);
    return;
  }

  if (npc.inVehicle && (distance < 105 || touchingSwarm)) {
    releaseNpcVehicle(npc, { carType: "policeCar", color: npc.carColor });
    npc.inVehicle = false;
    npc.radius = 8;
  } else if (npc.inVehicle) {
    npc.radius = 11;
  }

  if (seesPlayer) {
    npc.lastSeenTimer = 4.5;
    npc.targetX = state.player.x;
    npc.targetY = state.player.y;
    state.world.alert = clamp(state.world.alert + 26 * dt, 0, 100);
  } else {
    npc.lastSeenTimer = Math.max(0, npc.lastSeenTimer - dt);
  }

  npc.shootCooldown -= dt;
  if (seesPlayer && distance <= CONFIG.policeGunRange && npc.shootCooldown <= 0) {
    shootPlayer(npc);
    npc.shootCooldown = CONFIG.shotCooldown;
  }

  if (touchingSwarm) {
    dragNpcIntoSwarm(npc, touchingSwarm, dt);
  } else if (seesPlayer) {
    if (distance > desiredRange) {
      steerEntity(npc, state.player.x, state.player.y, 0.12, chaseSpeed, dt);
    } else {
      const dx = npc.x - state.player.x;
      const dy = npc.y - state.player.y;
      const away = Math.hypot(dx, dy) || 0.0001;
      steerEntity(npc, npc.x + (dx / away) * 120, npc.y + (dy / away) * 120, 0.09, chaseSpeed, dt);
    }
  } else if (npc.lastSeenTimer > 0) {
    if (npc.inVehicle) {
      steerRoadVehicle(npc, npc.targetX, npc.targetY, 0.095, patrolSpeed + 0.2, dt);
    } else {
      steerEntity(npc, npc.targetX, npc.targetY, 0.095, patrolSpeed + 0.2, dt);
    }
  } else {
    npc.timer -= dt;
    if (npc.timer <= 0 || distanceBetween(npc.x, npc.y, npc.targetX, npc.targetY) < 16) {
      const target = choosePolicePatrolTarget(npc);
      npc.targetX = target.x;
      npc.targetY = target.y;
      npc.timer = npc.inVehicle ? 1.4 + Math.random() * 1.8 : 2.2 + Math.random() * 2.6;
    }
    if (npc.inVehicle) {
      steerRoadVehicle(npc, npc.targetX, npc.targetY, 0.05, patrolSpeed, dt);
    } else {
      steerEntity(npc, npc.targetX, npc.targetY, 0.05, patrolSpeed, dt);
    }
  }
}

function updatePoliceBoss(npc, dt) {
  const distance = distanceBetween(npc.x, npc.y, state.player.x, state.player.y);
  const touchingSwarm = getNpcSwarmContact(npc);
  const directBodyContact = distance <= npc.radius + state.player.radius + 10;
  const seesPlayer = canSeePlayer(npc, CONFIG.policeBossVision);

  npc.radius = 12;
  npc.lastSeenTimer = 999;
  npc.targetX = state.player.x;
  npc.targetY = state.player.y;
  state.world.alert = clamp(state.world.alert + 32 * dt, 0, 100);
  npc.shootCooldown -= dt;
  npc.disengageTimer = Math.max(0, npc.disengageTimer - dt);
  npc.reinforcementCooldown = Math.max(0, (npc.reinforcementCooldown || 0) - dt);

  if (touchingSwarm || directBodyContact) {
    const touchCount = touchingSwarm ? touchingSwarm.touchCount : 1;
    const crushDamage = (
      10.5 +
      touchCount * 2.2 +
      Math.sqrt(state.player.followers.length + 1) * 0.12 +
      (directBodyContact ? 8.5 : 0)
    ) * dt;
    npc.health = Math.max(0, npc.health - crushDamage);
    const awayX = npc.x - state.player.x;
    const awayY = npc.y - state.player.y;
    const awayDistance = Math.hypot(awayX, awayY) || 0.0001;
    npc.vx += (awayX / awayDistance) * (6.8 + touchCount * 0.95 + (directBodyContact ? 1.2 : 0));
    npc.vy += (awayY / awayDistance) * (6.8 + touchCount * 0.95 + (directBodyContact ? 1.2 : 0));
    npc.x += (awayX / awayDistance) * (22 + (directBodyContact ? 6 : 0));
    npc.y += (awayY / awayDistance) * (22 + (directBodyContact ? 6 : 0));
    spawnBloodStamp(npc.x, npc.y, 2.2, 1, npc.vx * 0.45, npc.vy * 0.45);
    npc.disengageTimer = Math.max(npc.disengageTimer, CONFIG.policeBossDisengageTime + 2.4);
    if (npc.health <= 0) {
      absorbNpc(npc);
      return;
    }
  }

  if (
    npc.health <= npc.maxHealth * CONFIG.policeBossReinforcementHealthThreshold &&
    npc.reinforcementCalls < CONFIG.policeBossMaxReinforcementCalls &&
    npc.reinforcementCooldown <= 0
  ) {
    callPoliceBossReinforcements(npc);
  }

  if (distance < CONFIG.policeBossTooCloseRange) {
    npc.disengageTimer = Math.max(npc.disengageTimer, CONFIG.policeBossDisengageTime);
  }

  if (npc.disengageTimer > 0) {
    const angle = Math.atan2(npc.y - state.player.y, npc.x - state.player.x) + npc.orbitDirection * 0.65;
    const retreatDistance = CONFIG.policeBossRetreatDistance;
    const retreatX = state.player.x + Math.cos(angle) * retreatDistance;
    const retreatY = state.player.y + Math.sin(angle) * retreatDistance;
    steerEntity(npc, retreatX, retreatY, 0.22, CONFIG.policeBossSearchSpeed, dt);
    return;
  }

  const attackAngle = state.time * CONFIG.policeBossCircleSpeed * npc.orbitDirection + npc.orbitSeed;
  const attackX = state.player.x + Math.cos(attackAngle) * CONFIG.policeBossDesiredRange;
  const attackY = state.player.y + Math.sin(attackAngle) * (CONFIG.policeBossDesiredRange * 0.72);
  steerEntity(npc, attackX, attackY, 0.24, CONFIG.policeBossMotorcycleSpeed, dt);

  if (seesPlayer && distance <= CONFIG.policeBossDesiredRange + 70 && npc.shootCooldown <= 0) {
    shootShotgunPlayer(npc);
    npc.shootCooldown = CONFIG.policeBossShotCooldown;
  }
}

function chooseMilitaryBossWanderTarget(npc) {
  const militarySpawns = getLoadedMilitarySpawns();
  const pool = militarySpawns.length ? militarySpawns : getLoadedWalkSpawns(0);
  if (!pool.length) {
    return { x: npc.x, y: npc.y };
  }
  const rng = mulberry32(hash2d(npc.id * 19, Math.floor(state.time * 9) + npc.retreatThresholdIndex * 47));
  return pool[randomInt(rng, 0, pool.length - 1)];
}

function setMilitaryBossRetreat(npc) {
  const angle = Math.atan2(npc.y - state.player.y, npc.x - state.player.x) + (Math.random() - 0.5) * 0.8;
  npc.retreatTargetX = state.player.x + Math.cos(angle) * CONFIG.militaryBossRetreatDistance;
  npc.retreatTargetY = state.player.y + Math.sin(angle) * CONFIG.militaryBossRetreatDistance;
  npc.retreatTimer = 6.4;
  npc.mode = "retreat";
  npc.lastSeenTimer = 0;
  npc.targetX = npc.retreatTargetX;
  npc.targetY = npc.retreatTargetY;
}

function callMilitaryBossReinforcements(npc) {
  if (npc.reinforcementCooldown > 0) {
    return;
  }
  npc.reinforcementCooldown = CONFIG.militaryBossReinforcementCooldown;
  const types = ["militarySoldier", "militaryGrenadier", "tank", "helicopter"];
  const rng = mulberry32(hash2d(npc.id * 41, Math.floor(state.time * 10) + state.world.nextNpcId));
  const count = 3 + Math.min(2, npc.retreatThresholdIndex);
  for (let index = 0; index < count; index += 1) {
    const type = index === count - 1 && npc.retreatThresholdIndex >= 2 ? "tank" : types[randomInt(rng, 0, types.length - 1)];
    const angle = randomBetween(rng, 0, Math.PI * 2);
    const offset = randomBetween(rng, 80, 160);
    const x = npc.x + Math.cos(angle) * offset;
    const y = npc.y + Math.sin(angle) * offset;
    const chunk = getOrCreateChunkForPosition(x, y);
    if (!chunk) {
      continue;
    }
    state.world.npcs.push(createMilitaryNpc(type, { x, y, chunkKey: chunk.key }, rng));
    state.world.nextNpcId += 1;
  }
}

function militaryBossSlamImpact(npc) {
  explodeAt(npc.slamTargetX, npc.slamTargetY, CONFIG.militaryBossSlamRadius, 12, "#ff925a");
  const playerDistance = distanceBetween(npc.slamTargetX, npc.slamTargetY, state.player.x, state.player.y);
  if (playerDistance <= CONFIG.militaryBossSlamRadius + 24) {
    const dx = state.player.x - npc.slamTargetX;
    const dy = state.player.y - npc.slamTargetY;
    const distance = Math.hypot(dx, dy) || 0.0001;
    const blastForce = playerDistance <= 48 ? 4.8 : 3.2;
    state.player.vx += (dx / distance) * blastForce;
    state.player.vy += (dy / distance) * blastForce;
    if (playerDistance <= 48) {
      damagePlayer(28, npc.slamTargetX, npc.slamTargetY, 2.3);
    } else {
      damagePlayer(14, npc.slamTargetX, npc.slamTargetY, 1.6);
    }
  }
  spawnDebrisBurst(npc.slamTargetX, npc.slamTargetY, "#7d8289", 14, 0, 0, 6);
  setMilitaryBossRetreat(npc);
}

function updateMilitaryBossArms(npc, dt, seesPlayer, distance) {
  if (!seesPlayer) {
    return;
  }
  for (const arm of npc.arms) {
    arm.cooldown = Math.max(0, arm.cooldown - dt);
    if (arm.weapon === "chainsaw") {
      if (distance <= CONFIG.militaryBossChainsawRange && arm.cooldown <= 0) {
        damagePlayer(12, npc.x, npc.y, 1.5);
        spawnBloodStamp(state.player.x, state.player.y, 4.2, 1, state.player.vx * 0.8, state.player.vy * 0.8);
        arm.cooldown = 0.72;
      }
      continue;
    }

    if (arm.weapon === "flamethrower") {
      if (distance > CONFIG.militaryBossChainsawRange && distance <= CONFIG.militaryBossFlameRange && arm.cooldown <= 0) {
        shootPlayer(npc, {
          damage: 4.8,
          color: "rgba(255, 118, 62, 0.95)",
          width: 5.4,
          life: 0.16,
          push: 0.22,
          muzzleDistance: 28,
          jitter: 0.12,
        });
        arm.cooldown = 0.22;
      }
      continue;
    }

    if (arm.weapon === "minigun") {
      if (distance > CONFIG.militaryBossFlameRange * 0.9 && distance <= CONFIG.militaryBossMinigunRange && arm.cooldown <= 0) {
        shootPlayer(npc, {
          damage: 4.2,
          color: "rgba(255, 214, 132, 1)",
          width: 2.2,
          life: 0.09,
          push: 0.28,
          muzzleDistance: 30,
          jitter: 0.06,
        });
        arm.cooldown = 0.11;
      }
      continue;
    }

    if (arm.weapon === "rocket" && distance >= CONFIG.militaryBossRocketRangeMin && arm.cooldown <= 0) {
      launchExplosive(npc, {
        kind: "mechRocket",
        offset: 30,
        speed: CONFIG.grenadeSpeed * 1.25,
        life: 1.35,
        radius: 7,
        blastRadius: CONFIG.grenadeBlastRadius + 18,
        damage: CONFIG.grenadeDamage + 10,
        color: "#ff8e63",
      });
      arm.cooldown = 1.95;
    }
  }
}

function updateMilitaryBoss(npc, dt) {
  const distance = distanceBetween(npc.x, npc.y, state.player.x, state.player.y);
  const touchingSwarm = getNpcSwarmContact(npc);
  const directBodyContact = distance <= npc.radius + state.player.radius + 12;
  const seesPlayer = canSeePlayer(npc, CONFIG.militaryBossVision);

  npc.reinforcementCooldown = Math.max(0, npc.reinforcementCooldown - dt);
  npc.chargeCooldown = Math.max(0, npc.chargeCooldown - dt);
  npc.jumpCooldown = Math.max(0, npc.jumpCooldown - dt);
  npc.bodyDamageCooldown = Math.max(0, npc.bodyDamageCooldown - dt);

  if (touchingSwarm || directBodyContact) {
    const touchCount = touchingSwarm ? touchingSwarm.touchCount : 1;
    const damage = (6.2 + touchCount * 1.15 + (directBodyContact ? 5 : 0)) * dt;
    npc.health = Math.max(0, npc.health - damage);
    npc.wasGrabbedBySwarm = true;
    if (npc.health <= 0) {
      absorbNpc(npc);
      return;
    }
  }

  if (npc.retreatThresholdIndex < npc.retreatThresholds.length && npc.health <= npc.maxHealth * npc.retreatThresholds[npc.retreatThresholdIndex]) {
    npc.retreatThresholdIndex += 1;
    callMilitaryBossReinforcements(npc);
    setMilitaryBossRetreat(npc);
  }

  if (seesPlayer) {
    npc.lastSeenTimer = 6.5;
    npc.targetX = state.player.x;
    npc.targetY = state.player.y;
    state.world.alert = clamp(state.world.alert + 30 * dt, 0, 100);
  } else {
    npc.lastSeenTimer = Math.max(0, npc.lastSeenTimer - dt);
  }

  const aware = seesPlayer || npc.lastSeenTimer > 0;

  if (npc.mode === "retreat") {
    npc.retreatTimer = Math.max(0, npc.retreatTimer - dt);
    steerEntity(npc, npc.retreatTargetX, npc.retreatTargetY, 0.13, CONFIG.militaryBossRetreatSpeed, dt);
    if (npc.retreatTimer <= 0 || distanceBetween(npc.x, npc.y, npc.retreatTargetX, npc.retreatTargetY) < 80) {
      npc.mode = "wander";
      npc.searchTimer = 0;
    }
    return;
  }

  if (npc.mode === "chargeWindup") {
    npc.attackTimer -= dt;
    npc.vx *= 0.82;
    npc.vy *= 0.82;
    if (npc.attackTimer <= 0) {
      npc.mode = "charge";
      npc.attackTimer = 0.8;
      const dx = npc.targetX - npc.x;
      const dy = npc.targetY - npc.y;
      const length = Math.hypot(dx, dy) || 0.0001;
      npc.chargeDirX = dx / length;
      npc.chargeDirY = dy / length;
      npc.faceX = npc.chargeDirX;
      npc.faceY = npc.chargeDirY;
    }
    return;
  }

  if (npc.mode === "charge") {
    npc.attackTimer -= dt;
    npc.vx += npc.chargeDirX * 0.4 * dt * 60;
    npc.vy += npc.chargeDirY * 0.4 * dt * 60;
    const speed = Math.hypot(npc.vx, npc.vy) || 0.0001;
    if (speed > CONFIG.militaryBossChargeSpeed) {
      const factor = CONFIG.militaryBossChargeSpeed / speed;
      npc.vx *= factor;
      npc.vy *= factor;
    }
    npc.x += npc.vx;
    npc.y += npc.vy;
    resolveEntityAgainstBuildings(npc, npc.radius);
    if (distanceBetween(npc.x, npc.y, state.player.x, state.player.y) <= npc.radius + state.player.radius + 10) {
      damagePlayer(26, npc.x, npc.y, 2.6);
      setMilitaryBossRetreat(npc);
      npc.chargeCooldown = CONFIG.militaryBossChargeCooldown;
      return;
    }
    if (npc.attackTimer <= 0) {
      npc.mode = "engage";
      npc.chargeCooldown = CONFIG.militaryBossChargeCooldown;
    }
    return;
  }

  if (npc.mode === "slam") {
    npc.attackTimer -= dt;
    const progress = 1 - npc.attackTimer / 1.08;
    npc.altitude =
      progress < 0.45
        ? lerp(0, 110, progress / 0.45)
        : lerp(110, 0, (progress - 0.45) / 0.55);
    npc.x = lerp(npc.slamStartX, npc.slamTargetX, clamp(progress, 0, 1));
    npc.y = lerp(npc.slamStartY, npc.slamTargetY, clamp(progress, 0, 1));
    if (npc.attackTimer <= 0) {
      npc.altitude = 0;
      militaryBossSlamImpact(npc);
      npc.jumpCooldown = CONFIG.militaryBossJumpCooldown;
    }
    return;
  }

  if (aware) {
    if (npc.jumpCooldown <= 0 && distance <= 220) {
      npc.mode = "slam";
      npc.attackTimer = 1.08;
      npc.slamStartX = npc.x;
      npc.slamStartY = npc.y;
      npc.slamTargetX = state.player.x + state.player.vx * 18;
      npc.slamTargetY = state.player.y + state.player.vy * 18;
      npc.altitude = 0;
      return;
    }

    if (npc.chargeCooldown <= 0 && distance > 120 && distance < 340) {
      npc.mode = "chargeWindup";
      npc.attackTimer = CONFIG.militaryBossChargeWindup;
      npc.targetX = state.player.x;
      npc.targetY = state.player.y;
      return;
    }

    steerEntity(npc, npc.targetX, npc.targetY, 0.09, CONFIG.militaryBossWalkSpeed, dt);
    updateMilitaryBossArms(npc, dt, aware, distance);
    if (distance <= npc.radius + state.player.radius + 8 && npc.bodyDamageCooldown <= 0) {
      damagePlayer(10, npc.x, npc.y, 1.4);
      npc.bodyDamageCooldown = 0.6;
    }
    npc.mode = "engage";
    return;
  }

  npc.mode = "wander";
  npc.searchTimer -= dt;
  if (npc.searchTimer <= 0 || distanceBetween(npc.x, npc.y, npc.targetX, npc.targetY) < 22) {
    const target = chooseMilitaryBossWanderTarget(npc);
    npc.targetX = target.x;
    npc.targetY = target.y;
    npc.searchTimer = 1.8 + Math.random() * 2.6;
  }
  steerEntity(npc, npc.targetX, npc.targetY, 0.06, CONFIG.militaryBossSearchSpeed, dt);
}

function updateMilitarySoldier(npc, dt) {
  const seesPlayer = canSeePlayer(npc, CONFIG.soldierVision);
  const distance = distanceBetween(npc.x, npc.y, state.player.x, state.player.y);
  const touchingSwarm = getNpcSwarmContact(npc);

  if (distance < getPlayerAbsorbRadius() + npc.radius) {
    absorbNpc(npc);
    return;
  }

  if (seesPlayer) {
    npc.lastSeenTimer = 5;
    npc.targetX = state.player.x;
    npc.targetY = state.player.y;
    state.world.alert = clamp(state.world.alert + 18 * dt, 0, 100);
  } else {
    npc.lastSeenTimer = Math.max(0, npc.lastSeenTimer - dt);
  }

  npc.shootCooldown -= dt;
  if (seesPlayer && distance <= CONFIG.soldierRange && npc.shootCooldown <= 0) {
    shootPlayer(npc, {
      damage: CONFIG.soldierDamage,
      color: "rgba(255, 192, 106, 1)",
      width: 2.8,
      life: 0.14,
      push: 1,
      jitter: 0.03,
    });
    npc.shootCooldown = CONFIG.soldierShotCooldown;
  }

  if (touchingSwarm) {
    dragNpcIntoSwarm(npc, touchingSwarm, dt);
  } else if (seesPlayer) {
    if (distance > CONFIG.soldierRange * 0.6) {
      steerEntity(npc, state.player.x, state.player.y, 0.12, CONFIG.soldierSpeed, dt);
    } else {
      const dx = npc.x - state.player.x;
      const dy = npc.y - state.player.y;
      const away = Math.hypot(dx, dy) || 0.0001;
      steerEntity(npc, npc.x + (dx / away) * 130, npc.y + (dy / away) * 130, 0.085, CONFIG.soldierSpeed, dt);
    }
  } else if (npc.lastSeenTimer > 0) {
    steerEntity(npc, npc.targetX, npc.targetY, 0.1, CONFIG.soldierSpeed, dt);
  } else {
    npc.timer -= dt;
    if (npc.timer <= 0 || distanceBetween(npc.x, npc.y, npc.targetX, npc.targetY) < 16) {
      const target = chooseNearbyWalkTarget(npc);
      npc.targetX = target.x;
      npc.targetY = target.y;
      npc.timer = 2 + Math.random() * 2.4;
    }
    steerEntity(npc, npc.targetX, npc.targetY, 0.055, CONFIG.soldierSpeed * 0.8, dt);
  }
}

function updateMilitaryGrenadier(npc, dt) {
  const seesPlayer = canSeePlayer(npc, CONFIG.soldierVision);
  const distance = distanceBetween(npc.x, npc.y, state.player.x, state.player.y);
  const touchingSwarm = getNpcSwarmContact(npc);

  if (distance < getPlayerAbsorbRadius() + npc.radius) {
    absorbNpc(npc);
    return;
  }

  if (seesPlayer) {
    npc.lastSeenTimer = 5.5;
    npc.targetX = state.player.x;
    npc.targetY = state.player.y;
    state.world.alert = clamp(state.world.alert + 22 * dt, 0, 100);
  } else {
    npc.lastSeenTimer = Math.max(0, npc.lastSeenTimer - dt);
  }

  npc.grenadeCooldown -= dt;
  if (seesPlayer && distance <= CONFIG.grenadierRange && npc.grenadeCooldown <= 0) {
    launchExplosive(npc, {
      kind: "grenade",
      offset: 12,
      speed: CONFIG.grenadeSpeed,
      life: 1.05,
      radius: 5,
      blastRadius: CONFIG.grenadeBlastRadius,
      damage: CONFIG.grenadeDamage,
      color: "#8ba94f",
    });
    npc.grenadeCooldown = CONFIG.grenadierCooldown;
  }

  if (touchingSwarm) {
    dragNpcIntoSwarm(npc, touchingSwarm, dt);
  } else if (seesPlayer) {
    const dx = npc.x - state.player.x;
    const dy = npc.y - state.player.y;
    const away = Math.hypot(dx, dy) || 0.0001;
    steerEntity(npc, npc.x + (dx / away) * 120, npc.y + (dy / away) * 120, 0.09, CONFIG.soldierSpeed * 0.92, dt);
  } else if (npc.lastSeenTimer > 0) {
    steerEntity(npc, npc.targetX, npc.targetY, 0.085, CONFIG.soldierSpeed * 0.9, dt);
  } else {
    npc.timer -= dt;
    if (npc.timer <= 0 || distanceBetween(npc.x, npc.y, npc.targetX, npc.targetY) < 16) {
      const target = chooseNearbyWalkTarget(npc);
      npc.targetX = target.x;
      npc.targetY = target.y;
      npc.timer = 2.2 + Math.random() * 2.4;
    }
    steerEntity(npc, npc.targetX, npc.targetY, 0.05, CONFIG.soldierSpeed * 0.72, dt);
  }
}

function updateTank(npc, dt) {
  const seesPlayer = canSeePlayer(npc, CONFIG.tankVision);
  const distance = distanceBetween(npc.x, npc.y, state.player.x, state.player.y);
  const touchingSwarm = getNpcSwarmContact(npc);

  if (distance < getPlayerAbsorbRadius() + npc.radius * 0.85) {
    absorbNpc(npc);
    return;
  }

  if (seesPlayer) {
    npc.lastSeenTimer = 6;
    npc.targetX = state.player.x;
    npc.targetY = state.player.y;
    state.world.alert = clamp(state.world.alert + 28 * dt, 0, 100);
  } else {
    npc.lastSeenTimer = Math.max(0, npc.lastSeenTimer - dt);
  }

  npc.shootCooldown -= dt;
  if (seesPlayer && distance <= CONFIG.tankRange && npc.shootCooldown <= 0) {
    launchExplosive(npc, {
      kind: "shell",
      offset: 18,
      speed: CONFIG.tankShellSpeed,
      life: 1.4,
      radius: 6,
      blastRadius: CONFIG.tankBlastRadius,
      damage: CONFIG.tankDamage,
      color: "#f7b85f",
    });
    npc.shootCooldown = CONFIG.tankShotCooldown;
  }

  if (touchingSwarm) {
    dragNpcIntoSwarm(npc, touchingSwarm, dt);
  } else if (seesPlayer || npc.lastSeenTimer > 0) {
    steerEntity(npc, npc.targetX, npc.targetY, 0.08, CONFIG.tankSpeed, dt);
  } else {
    npc.timer -= dt;
    if (npc.timer <= 0 || distanceBetween(npc.x, npc.y, npc.targetX, npc.targetY) < 20) {
      const target = chooseNearbyWalkTarget(npc);
      npc.targetX = target.x;
      npc.targetY = target.y;
      npc.timer = 2.8 + Math.random() * 2.2;
    }
    steerEntity(npc, npc.targetX, npc.targetY, 0.038, CONFIG.tankSpeed * 0.9, dt);
  }
}

function updateHelicopter(npc, dt) {
  const seesPlayer = canSeePlayer(npc, CONFIG.helicopterVision, true);
  const distance = distanceBetween(npc.x, npc.y, state.player.x, state.player.y);

  if (canReachFlyingEnemy(npc)) {
    absorbNpc(npc);
    return;
  }

  if (seesPlayer) {
    npc.lastSeenTimer = 6;
    npc.targetX = state.player.x;
    npc.targetY = state.player.y;
    state.world.alert = clamp(state.world.alert + 30 * dt, 0, 100);
  } else {
    npc.lastSeenTimer = Math.max(0, npc.lastSeenTimer - dt);
  }

  npc.shootCooldown -= dt;
  if (seesPlayer && distance <= CONFIG.helicopterRange && npc.shootCooldown <= 0) {
    shootPlayer(npc, {
      damage: CONFIG.helicopterDamage,
      color: "rgba(255, 162, 76, 1)",
      width: 1.8,
      life: 0.09,
      push: 0.25,
      muzzleDistance: 18,
      jitter: 0.08,
      ignoreLOS: true,
    });
    npc.shootCooldown = CONFIG.helicopterShotCooldown;
  }

  const targetX = seesPlayer || npc.lastSeenTimer > 0 ? npc.targetX : npc.x + Math.cos(state.time + npc.id) * 40;
  const targetY = seesPlayer || npc.lastSeenTimer > 0 ? npc.targetY : npc.y + Math.sin(state.time * 1.2 + npc.id) * 40;
  const dx = targetX - npc.x;
  const dy = targetY - npc.y;
  const distanceToTarget = Math.hypot(dx, dy) || 0.0001;
  npc.vx += (dx / distanceToTarget) * 0.11 * dt * 60;
  npc.vy += (dy / distanceToTarget) * 0.11 * dt * 60;
  npc.vx *= 0.92;
  npc.vy *= 0.92;
  const speed = Math.hypot(npc.vx, npc.vy);
  if (speed > CONFIG.helicopterSpeed) {
    const factor = CONFIG.helicopterSpeed / speed;
    npc.vx *= factor;
    npc.vy *= factor;
  }
  if (speed > 0.01) {
    npc.faceX = npc.vx / speed;
    npc.faceY = npc.vy / speed;
  }
  npc.altitude = lerp(npc.altitude || 70, seesPlayer ? 74 : 66, 0.02);
  npc.x += npc.vx;
  npc.y += npc.vy;
}

function updateAlien(npc, dt) {
  const seesPlayer = canSeePlayer(npc, CONFIG.alienVision, true);
  const distance = distanceBetween(npc.x, npc.y, state.player.x, state.player.y);
  const orbitRadius =
    npc.variant === "bomb" ? 210 :
    npc.variant === "laser" ? 250 :
    185;

  if (canReachFlyingEnemy(npc)) {
    absorbNpc(npc);
    return;
  }

  if (seesPlayer) {
    npc.lastSeenTimer = 7;
    npc.targetX = state.player.x;
    npc.targetY = state.player.y;
    state.world.alert = clamp(state.world.alert + 34 * dt, 0, 100);
  } else {
    npc.lastSeenTimer = Math.max(0, npc.lastSeenTimer - dt);
  }

  const trackingX = seesPlayer || npc.lastSeenTimer > 0 ? npc.targetX : npc.x + Math.cos(state.time * 0.4 + npc.id) * 80;
  const trackingY = seesPlayer || npc.lastSeenTimer > 0 ? npc.targetY : npc.y + Math.sin(state.time * 0.48 + npc.id) * 80;
  const orbitAngle = state.time * 0.6 + npc.id * 0.7;
  const desiredX = trackingX + Math.cos(orbitAngle) * orbitRadius;
  const desiredY = trackingY + Math.sin(orbitAngle) * orbitRadius * 0.7 - 40;
  const dx = desiredX - npc.x;
  const dy = desiredY - npc.y;
  const distanceToTarget = Math.hypot(dx, dy) || 0.0001;
  npc.vx += (dx / distanceToTarget) * 0.12 * dt * 60;
  npc.vy += (dy / distanceToTarget) * 0.12 * dt * 60;
  npc.vx *= 0.93;
  npc.vy *= 0.93;

  const speedLimit = npc.variant === "bomb" ? 2.6 : npc.variant === "laser" ? 2.9 : 3.2;
  const speed = Math.hypot(npc.vx, npc.vy);
  if (speed > speedLimit) {
    const factor = speedLimit / speed;
    npc.vx *= factor;
    npc.vy *= factor;
  }
  if (speed > 0.02) {
    npc.faceX = npc.vx / speed;
    npc.faceY = npc.vy / speed;
  }

  npc.x += npc.vx;
  npc.y += npc.vy;
  npc.altitude = lerp(npc.altitude || 98, seesPlayer ? 122 : 110, 0.02);
  npc.shootCooldown -= dt;
  npc.trapCooldown -= dt;

  if ((seesPlayer || npc.lastSeenTimer > 0) && npc.trapCooldown <= 0) {
    const rng = mulberry32(hash2d(npc.id * 17 + state.world.traps.length, Math.floor(state.time * 10) + npc.id * 29));
    const trapType = ["tripwire", "gas", "mine", "teleportMine"][randomInt(rng, 0, 3)];
    const point = chooseAlienTrapPoint(rng);
    if (point) {
      spawnAlienTrap(trapType, point.x, point.y, {
        angle: rng() * Math.PI * 2,
        length: randomBetween(rng, 92, 148),
      });
    }
    npc.trapCooldown = CONFIG.alienTrapCooldown + rng() * 2.2;
  }

  if (!seesPlayer || distance > CONFIG.alienVision) {
    return;
  }

  if (npc.variant === "bomb" && distance <= CONFIG.alienBombRange && npc.shootCooldown <= 0) {
    launchExplosive(npc, {
      kind: "alienBomb",
      offset: 14,
      speed: 3.8,
      life: 1.15,
      radius: 7,
      blastRadius: 108,
      damage: CONFIG.alienBombDamage,
      color: "#ff945a",
    });
    npc.shootCooldown = CONFIG.alienBombCooldown;
  } else if (npc.variant === "laser" && distance <= CONFIG.alienLaserRange && npc.shootCooldown <= 0) {
    shootPlayer(npc, {
      damage: CONFIG.alienLaserDamage,
      color: "rgba(255, 72, 72, 1)",
      width: 5.2,
      life: 0.18,
      push: 0.55,
      muzzleDistance: 14,
      jitter: 0.01,
      ignoreLOS: true,
    });
    npc.shootCooldown = CONFIG.alienLaserCooldown;
  } else if (npc.variant === "minigun" && distance <= CONFIG.alienMinigunRange && npc.shootCooldown <= 0) {
    shootPlayer(npc, {
      damage: CONFIG.alienMinigunDamage,
      color: "rgba(255, 222, 138, 1)",
      width: 1.9,
      life: 0.08,
      push: 0.18,
      muzzleDistance: 14,
      jitter: 0.055,
      ignoreLOS: true,
    });
    npc.shootCooldown = CONFIG.alienMinigunCooldown;
  }
}

function updateCIA(npc, dt) {
  const squad = getSquadMates("cia", npc.squadId);
  if (squad.length < 2) {
    npc.alive = false;
    return;
  }

  const squadSpotted = squad.some((mate) => canSeePlayer(mate, CONFIG.ciaVision));
  const distance = distanceBetween(npc.x, npc.y, state.player.x, state.player.y);
  const touchingSwarm = getNpcSwarmContact(npc);

  if (distance < getPlayerAbsorbRadius() + npc.radius) {
    absorbNpc(npc);
    return;
  }

  if (squadSpotted) {
    for (const mate of squad) {
      mate.lastSeenTimer = 7;
      mate.targetX = state.player.x;
      mate.targetY = state.player.y;
      if (mate.squadMode === "dismount" && mate.inVehicle && distanceBetween(mate.x, mate.y, state.player.x, state.player.y) < 280) {
        releaseNpcVehicle(mate, { carType: "ciaCar", color: mate.carColor });
        mate.inVehicle = false;
        mate.radius = 8;
      }
    }
    state.world.alert = clamp(state.world.alert + 42 * dt, 0, 100);
  } else {
    npc.lastSeenTimer = Math.max(0, npc.lastSeenTimer - dt);
  }

  npc.shootCooldown -= dt;
  if (npc.inVehicle) {
    npc.radius = 11;
    if ((squadSpotted || npc.lastSeenTimer > 0) && distance <= CONFIG.ciaCarRange && npc.shootCooldown <= 0) {
      shootPlayer(npc, {
        damage: CONFIG.ciaDamage,
        color: "rgba(255, 244, 200, 1)",
        width: 2.8,
        life: 0.12,
        push: 1.1,
        jitter: 0.04,
        muzzleDistance: 18,
      });
      npc.shootCooldown = CONFIG.ciaShotCooldown;
    }

    if (touchingSwarm) {
      releaseNpcVehicle(npc, { carType: "ciaCar", color: npc.carColor });
      npc.inVehicle = false;
      npc.radius = 8;
      dragNpcIntoSwarm(npc, touchingSwarm, dt);
    } else if (squadSpotted || npc.lastSeenTimer > 0) {
      if (distance > 170) {
        steerEntity(npc, state.player.x, state.player.y, 0.13, CONFIG.ciaCarSpeed, dt);
      } else {
        const dx = npc.x - state.player.x;
        const dy = npc.y - state.player.y;
        const away = Math.hypot(dx, dy) || 0.0001;
        steerEntity(npc, npc.x + (dx / away) * 150, npc.y + (dy / away) * 150, 0.1, CONFIG.ciaCarSpeed, dt);
      }
    } else {
      npc.timer -= dt;
      if (npc.timer <= 0 || distanceBetween(npc.x, npc.y, npc.targetX, npc.targetY) < 18) {
        const target = chooseCIAPatrolTarget(npc);
        npc.targetX = target.x;
        npc.targetY = target.y;
        npc.timer = 1.2 + Math.random() * 1.6;
      }
      steerRoadVehicle(npc, npc.targetX, npc.targetY, 0.06, CONFIG.ciaCarSpeed * 0.92, dt);
    }
    return;
  }

  npc.radius = 8;
  if ((squadSpotted || npc.lastSeenTimer > 0) && distance <= CONFIG.ciaFootRange && npc.shootCooldown <= 0) {
    shootPlayer(npc, {
      damage: CONFIG.ciaDamage + 2,
      color: "rgba(255, 240, 190, 1)",
      width: 3,
      life: 0.11,
      push: 1.2,
      jitter: 0.025,
    });
    npc.shootCooldown = CONFIG.ciaShotCooldown * 0.9;
  }

  if (touchingSwarm) {
    dragNpcIntoSwarm(npc, touchingSwarm, dt);
  } else if (squadSpotted || npc.lastSeenTimer > 0) {
    if (distance > CONFIG.ciaFootRange * 0.55) {
      steerEntity(npc, state.player.x, state.player.y, 0.13, CONFIG.ciaFootSpeed, dt);
    } else {
      const dx = npc.x - state.player.x;
      const dy = npc.y - state.player.y;
      const away = Math.hypot(dx, dy) || 0.0001;
      steerEntity(npc, npc.x + (dx / away) * 145, npc.y + (dy / away) * 145, 0.1, CONFIG.ciaFootSpeed, dt);
    }
  } else {
    npc.timer -= dt;
    if (npc.timer <= 0 || distanceBetween(npc.x, npc.y, npc.targetX, npc.targetY) < 18) {
      const target = chooseCIAPatrolTarget(npc);
      npc.targetX = target.x;
      npc.targetY = target.y;
      npc.timer = 1.8 + Math.random() * 1.8;
    }
    steerEntity(npc, npc.targetX, npc.targetY, 0.06, CONFIG.ciaFootSpeed * 0.9, dt);
  }
}

function applyEarthquakeToNpc(npc, dt) {
  const worm = state.world.ciaWorm;
  if (!worm || worm.quake <= 0.08) {
    return;
  }
  const vehicleLike = npc.inCar || npc.inVehicle || npc.type === "tank";
  if (!vehicleLike) {
    return;
  }
  const wobble = worm.quake * dt * 60 * 0.12;
  npc.vx += (Math.random() - 0.5) * wobble;
  npc.vy += (Math.random() - 0.5) * wobble;
  if (npc.type === "civilian") {
    npc.fearTimer = Math.max(npc.fearTimer || 0, 1.8);
  }
}

function spawnCIAWormHole(worm, x, y, radius) {
  worm.holes.push({
    x,
    y,
    radius,
    life: CONFIG.ciaWormHoleLifetime,
    maxLife: CONFIG.ciaWormHoleLifetime,
  });
  if (worm.holes.length > 10) {
    worm.holes.splice(0, worm.holes.length - 10);
  }
}

function spawnCIAWormDust(worm, x, y) {
  worm.dust.push({
    x: x + (Math.random() - 0.5) * 18,
    y: y + (Math.random() - 0.5) * 18,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    size: 2.4 + Math.random() * 3.6,
    life: 1.8 + Math.random() * 1.1,
    maxLife: 1.8 + Math.random() * 1.1,
  });
  if (worm.dust.length > 220) {
    worm.dust.splice(0, worm.dust.length - 220);
  }
}

function chooseCIAWormTarget() {
  const angle = Math.random() * Math.PI * 2;
  const distance = 180 + Math.random() * 420;
  return {
    x: state.world.ciaWorm.x + Math.cos(angle) * distance,
    y: state.world.ciaWorm.y + Math.sin(angle) * distance,
  };
}

function updateCIAWorm(dt) {
  const worm = state.world.ciaWorm;
  state.camera.focusX = null;
  state.camera.focusY = null;
  state.camera.shakeX = 0;
  state.camera.shakeY = 0;
  if (!worm) {
    return;
  }

  for (let index = worm.dust.length - 1; index >= 0; index -= 1) {
    const dust = worm.dust[index];
    dust.life -= dt;
    dust.x += dust.vx;
    dust.y += dust.vy;
    dust.vx *= 0.96;
    dust.vy *= 0.96;
    if (dust.life <= 0) {
      worm.dust.splice(index, 1);
    }
  }

  worm.chompPhase += dt * 22;
  worm.quake = Math.max(0, worm.quake - dt * 1.2);
  worm.quakeEventTimer = Math.max(0, worm.quakeEventTimer - dt);

  if (worm.cutscene) {
    worm.cutsceneTimer += dt;
    state.camera.focusX = worm.portalX;
    state.camera.focusY = worm.portalY;
    worm.quake = worm.cutsceneTimer > 2.2 ? CONFIG.ciaWormQuakeStrength * 0.75 : 0.18;
    state.camera.shakeX = (Math.random() - 0.5) * worm.quake * 22;
    state.camera.shakeY = (Math.random() - 0.5) * worm.quake * 18;

    if (worm.cutsceneTimer > 3.4 && !worm.emergeApplied) {
      spawnCIAWormHole(worm, worm.portalX, worm.portalY, 170);
      destroyWorldWithWorm(worm.portalX, worm.portalY, 180);
      worm.emergeApplied = true;
    }

    if (worm.cutsceneTimer >= 5.6) {
      worm.cutscene = false;
      worm.active = true;
      worm.visible = false;
      worm.mode = "underground";
      worm.timer = 1.2;
      worm.x = worm.portalX;
      worm.y = worm.portalY;
      worm.targetX = worm.portalX + 240;
      worm.targetY = worm.portalY + 160;
      worm.trail = [];
    }
    return;
  }

  if (!worm.active) {
    return;
  }

  if (worm.quakeEventTimer <= 0) {
    worm.quake = Math.max(worm.quake, 0.45 + Math.random() * 0.5);
    worm.quakeEventTimer = 6 + Math.random() * 14;
  }
  if (worm.quake > 0.08) {
    state.camera.shakeX = (Math.random() - 0.5) * worm.quake * 8;
    state.camera.shakeY = (Math.random() - 0.5) * worm.quake * 7;
  }

  if (worm.mode === "underground") {
    worm.visible = false;
    worm.timer -= dt;
    worm.damageTimer -= dt;
    const dx = worm.targetX - worm.x;
    const dy = worm.targetY - worm.y;
    const distance = Math.hypot(dx, dy) || 0.0001;
    worm.dirX = dx / distance;
    worm.dirY = dy / distance;
    worm.x += worm.dirX * CONFIG.ciaWormUndergroundSpeed;
    worm.y += worm.dirY * CONFIG.ciaWormUndergroundSpeed;
    if (worm.damageTimer <= 0) {
      for (let index = 0; index < 5; index += 1) {
        spawnCIAWormDust(worm, worm.x, worm.y);
      }
      worm.damageTimer = 0.12;
    }
    if (distance < 40 || worm.timer <= 0) {
      const roll = Math.random();
      if (roll < 0.18) {
        worm.mode = "breach";
        worm.visible = true;
        worm.timer = 1.25;
        worm.emergeApplied = false;
        worm.trail = [{ x: worm.x, y: worm.y, radius: CONFIG.ciaWormBodyRadius }];
      } else if (roll < 0.34) {
        worm.mode = "surface";
        worm.visible = true;
        worm.timer = 2.8 + Math.random() * 1.8;
        const target = chooseCIAWormTarget();
        const fx = target.x - worm.x;
        const fy = target.y - worm.y;
        const length = Math.hypot(fx, fy) || 0.0001;
        worm.dirX = fx / length;
        worm.dirY = fy / length;
        worm.trail = [];
        worm.damageTimer = 0;
      } else {
        const target = chooseCIAWormTarget();
        worm.targetX = target.x;
        worm.targetY = target.y;
        worm.timer = 3.2 + Math.random() * 6.4;
      }
    }
    return;
  }

  if (worm.mode === "breach") {
    worm.quake = Math.max(worm.quake, CONFIG.ciaWormQuakeStrength * 0.95);
    state.camera.shakeX = (Math.random() - 0.5) * worm.quake * 14;
    state.camera.shakeY = (Math.random() - 0.5) * worm.quake * 12;
    worm.timer -= dt;
    const progress = 1 - worm.timer / 1.25;
    if (!worm.emergeApplied && progress >= 0.2) {
      spawnCIAWormHole(worm, worm.x, worm.y, 210);
      destroyWorldWithWorm(worm.x, worm.y, CONFIG.ciaWormBreachRadius);
      worm.emergeApplied = true;
    }
    if (worm.timer <= 0) {
      worm.mode = "underground";
      worm.visible = false;
      const target = chooseCIAWormTarget();
      worm.targetX = target.x;
      worm.targetY = target.y;
      worm.timer = 4 + Math.random() * 8;
    }
    return;
  }

  if (worm.mode === "surface") {
    worm.quake = Math.max(worm.quake, CONFIG.ciaWormQuakeStrength * 0.42);
    state.camera.shakeX = (Math.random() - 0.5) * worm.quake * 10;
    state.camera.shakeY = (Math.random() - 0.5) * worm.quake * 9;
    worm.timer -= dt;
    worm.damageTimer -= dt;
    const drift = (Math.random() - 0.5) * 0.08;
    const angle = Math.atan2(worm.dirY, worm.dirX) + drift;
    worm.dirX = Math.cos(angle);
    worm.dirY = Math.sin(angle);
    worm.x += worm.dirX * CONFIG.ciaWormSurfaceSpeed;
    worm.y += worm.dirY * CONFIG.ciaWormSurfaceSpeed;
    worm.trail.unshift({ x: worm.x, y: worm.y, radius: CONFIG.ciaWormBodyRadius });
    if (worm.trail.length > 34) {
      worm.trail.length = 34;
    }
    if (worm.damageTimer <= 0) {
      for (let index = 0; index < Math.min(7, worm.trail.length); index += 1) {
        const segment = worm.trail[index];
        destroyWorldWithWorm(segment.x, segment.y, Math.max(68, segment.radius + 26 - index * 5));
      }
      worm.damageTimer = 0.14;
    }
    if (worm.timer <= 0 || Math.random() < dt * 0.1) {
      spawnCIAWormHole(worm, worm.x, worm.y, 180);
      worm.mode = "underground";
      worm.visible = false;
      const target = chooseCIAWormTarget();
      worm.targetX = target.x;
      worm.targetY = target.y;
      worm.timer = 5 + Math.random() * 10;
    }
  }
}

function updateBaseDefenses(dt) {
  for (const chunk of state.world.chunks.values()) {
    for (const building of chunk.buildings) {
      if (building.destroyed || building.falling) {
        continue;
      }

      if (building.kind === "militaryBase") {
        building.cannonCooldown = Math.max(0, (building.cannonCooldown || 0) - dt);
        building.minigunCooldown = Math.max(0, (building.minigunCooldown || 0) - dt);
        const turretX = building.x + building.w * 0.5;
        const turretY = building.y - 6;
        const distance = distanceBetween(turretX, turretY, state.player.x, state.player.y);
        if (distance <= CONFIG.militaryBaseCannonRange) {
          const turret = { x: turretX, y: turretY, faceX: 0, faceY: -1, inVehicle: false };
          if (building.cannonCooldown <= 0) {
            launchExplosive(turret, {
              kind: "baseShell",
              offset: 18,
              speed: CONFIG.tankShellSpeed * 0.95,
              life: 1.5,
              radius: 7,
              blastRadius: CONFIG.tankBlastRadius + 18,
              damage: CONFIG.tankDamage + 8,
              color: "#ffbf6e",
            });
            building.cannonCooldown = CONFIG.militaryBaseCannonCooldown;
          }
          if (distance <= CONFIG.militaryBaseMinigunRange && building.minigunCooldown <= 0) {
            shootPlayer(turret, {
              damage: CONFIG.helicopterDamage + 1.4,
              color: "rgba(255, 196, 98, 1)",
              width: 2.1,
              life: 0.09,
              push: 0.34,
              muzzleDistance: 12,
              jitter: 0.06,
              ignoreLOS: true,
            });
            building.minigunCooldown = CONFIG.militaryBaseMinigunCooldown;
          }
        }
      } else if (building.kind === "ciaBase") {
        building.airstrikeCooldown = Math.max(0, (building.airstrikeCooldown || 0) - dt);
        const centerX = building.x + building.w * 0.5;
        const centerY = building.y + building.h * 0.5;
        const distance = distanceBetween(centerX, centerY, state.player.x, state.player.y);
        if (distance <= CONFIG.ciaBaseKillRadius && building.airstrikeCooldown <= 0) {
          state.world.projectiles.push({
            kind: "ciaBomb",
            x: state.player.x,
            y: state.player.y - 180,
            vx: 0,
            vy: 7.4,
            life: 0.62,
            radius: 11,
            blastRadius: 160,
            damage: state.player.maxHealth + 999,
            color: "#17181a",
            ownerType: "ciaBase",
            instantKill: true,
          });
          building.airstrikeCooldown = CONFIG.ciaBaseBombCooldown;
        }
      }
    }
  }
}

function spawnDebrisBurst(x, y, color, count, impulseX, impulseY, size = 4) {
  for (let index = 0; index < count; index += 1) {
    state.world.debris.push({
      x: x + (Math.random() - 0.5) * 8,
      y: y + (Math.random() - 0.5) * 8,
      vx: impulseX * (0.2 + Math.random() * 0.35) + (Math.random() - 0.5) * 2.4,
      vy: impulseY * (0.2 + Math.random() * 0.35) - Math.random() * 2.1,
      size: Math.max(2, size * (0.5 + Math.random() * 0.7)),
      rotation: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.18,
      life: CONFIG.debrisLifetime * (0.7 + Math.random() * 0.6),
      color,
    });
  }
  if (state.world.debris.length > CONFIG.maxDebrisPieces) {
    state.world.debris.splice(0, state.world.debris.length - CONFIG.maxDebrisPieces);
  }
}

function spawnOrganicBurst(x, y, intensity, impulseX, impulseY, options = {}) {
  const palette = ["rgba(120, 14, 14, 0.95)", "rgba(156, 26, 26, 0.92)", "rgba(98, 8, 8, 0.96)"];
  const shapes = ["chunk", "strip", "curl"];
  const count = Math.max(
    options.minCount || 0,
    Math.round(1 + intensity * 1.15 + Math.random() * 1.5),
  );

  for (let index = 0; index < count; index += 1) {
    const life = CONFIG.debrisLifetime * (options.lifeScale || 1) * (0.75 + Math.random() * 0.45);
    state.world.debris.push({
      x: x + (Math.random() - 0.5) * (8 + intensity * 4),
      y: y + (Math.random() - 0.5) * (8 + intensity * 4),
      vx: impulseX * (0.12 + Math.random() * 0.14) + (Math.random() - 0.5) * (0.95 + intensity * 0.22),
      vy: impulseY * (0.05 + Math.random() * 0.08) - Math.random() * (0.28 + intensity * 0.08),
      size: Math.max(3, (4.2 + intensity * 2.4) * (0.7 + Math.random() * 0.9)),
      rotation: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.24,
      life,
      maxLife: life,
      color: palette[index % palette.length],
      shape: shapes[(index + Math.floor(Math.random() * 3)) % shapes.length],
      stretch: 0.55 + Math.random() * 1.15,
      grounded: true,
      settled: false,
    });
  }

  if (state.world.debris.length > CONFIG.maxDebrisPieces) {
    state.world.debris.splice(0, state.world.debris.length - CONFIG.maxDebrisPieces);
  }
}

function applyDamageToBuilding(building, impact, directionX, directionY) {
  const chip = clamp((impact - building.impactThreshold * 0.25) * 1.7, 2, 18);
  const force = Math.max(0.5, impact * 0.25);
  const hitX = building.x + building.w * 0.5;
  const hitY = building.y + building.h * 0.5;
  spawnDebrisBurst(hitX, hitY, building.chipColor, Math.round(chip * 0.6), directionX * force, directionY * force, 4 + chip * 0.16);

  if (Math.abs(directionX) > Math.abs(directionY)) {
    if (directionX > 0) {
      const cut = Math.min(chip, building.w - 24);
      building.x += cut;
      building.w -= cut;
    } else {
      building.w -= Math.min(chip, building.w - 24);
    }
  } else if (directionY < 0) {
    const cut = Math.min(chip, building.h - 22);
    building.y += cut;
    building.h -= cut;
  } else {
    building.baseIntegrity -= chip * 0.8;
    building.h -= Math.min(chip * 0.28, building.h - 22);
  }

  building.integrity -= chip * 2.2;
  if (building.baseIntegrity <= 0 || building.integrity <= 0 || building.w < 30 || building.h < 24) {
    building.falling = true;
    building.fallDirection = directionX >= 0 ? 1 : -1;
  }
}

function applyDamageToDecor(deco, impact, directionX, directionY) {
  const chip = clamp((impact - deco.impactThreshold * 0.25) * 1.45, 1.5, 12);
  spawnDebrisBurst(deco.x, deco.y, deco.chipColor || "#7a7a7a", Math.round(chip * 0.5), directionX * 0.8, directionY * 0.8, 3 + chip * 0.15);
  deco.integrity -= chip * 2.4;

  if (deco.type === "tree") {
    deco.size = Math.max(6, deco.size - chip * 0.18);
  } else if (deco.type === "lamp") {
    deco.height = Math.max(4, (deco.height || 18) - chip * 0.55);
  } else if (deco.type === "policeCar" || deco.type === "civilianCar" || deco.type === "ciaCar") {
    deco.w = Math.max(18, deco.w - chip * 0.4);
    deco.h = Math.max(10, deco.h - chip * 0.12);
  }

  if (deco.integrity <= 0 || (deco.type === "lamp" && (deco.height || 0) <= 5) || (deco.type === "tree" && deco.size <= 7)) {
    deco.falling = true;
    deco.fallAngle = 0.12;
  }
}

function damageStructureFromPlayer(structure, profile, impact, directionX, directionY) {
  if (!structure.destructible || structure.destroyed || structure.falling) {
    return;
  }
  if (state.time - structure.lastHitTime < CONFIG.structureHitCooldown) {
    return;
  }
  if (impact < structure.impactThreshold * 0.35) {
    return;
  }
  const directionLength = Math.hypot(directionX, directionY) || 0.0001;
  const normalX = directionX / directionLength;
  const normalY = directionY / directionLength;
  structure.lastHitTime = state.time;
  if (profile === "building") {
    applyDamageToBuilding(structure, impact, normalX, normalY);
  } else {
    applyDamageToDecor(structure, impact, normalX, normalY);
  }
}

function updateStructureDamage(dt) {
  const playerSpeed = Math.hypot(state.player.vx, state.player.vy);
  const growth = getPlayerGrowthStats();
  const impact = playerSpeed * growth.destruction;
  const size = state.player.absorbedHumans;
  if (impact < 1.15) {
    return;
  }

  for (const chunk of state.world.chunks.values()) {
    for (const building of chunk.buildings) {
      if (building.destroyed || building.falling) {
        continue;
      }
      if (!circleIntersectsRect(state.player.x, state.player.y, state.player.radius + 4, building)) {
        continue;
      }
      const buildingThreshold =
        building.kind === "ciaBase" || building.kind === "militaryBase" ? 48 :
        building.kind === "policeStation" || building.kind === "apartments" ? 42 :
        building.kind === "marketHall" ? 34 :
        28;
      if (size < buildingThreshold) {
        continue;
      }
      const scaledImpact = impact * Math.max(0, 0.22 + (size - buildingThreshold) * 0.055);
      if (scaledImpact < building.impactThreshold * 1.8) {
        continue;
      }
      const centerX = building.x + building.w * 0.5;
      const centerY = building.y + building.h * 0.5;
      damageStructureFromPlayer(building, "building", scaledImpact, state.player.x - centerX, state.player.y - centerY);
    }
    for (const deco of chunk.decor) {
      if (!deco.destructible || deco.destroyed || deco.falling) {
        continue;
      }
      let overlaps = false;
      if (deco.type === "tree") {
        overlaps = distanceBetween(state.player.x, state.player.y, deco.x, deco.y) <= state.player.radius + deco.size * 0.9;
      } else if (deco.type === "lamp") {
        overlaps = circleIntersectsRect(state.player.x, state.player.y, state.player.radius + 2, {
          x: deco.x - 5,
          y: deco.y - (deco.height || 18) - 2,
          w: 10,
          h: (deco.height || 18) + 4,
        });
      } else if (deco.type === "policeCar" || deco.type === "civilianCar" || deco.type === "ciaCar") {
        overlaps = circleIntersectsRect(state.player.x, state.player.y, state.player.radius + 4, deco);
      }
      if (!overlaps) {
        continue;
      }
      damageStructureFromPlayer(deco, "decor", impact, state.player.x - deco.x, state.player.y - deco.y);
    }
  }
}

function updateFallingStructures(dt) {
  for (const chunk of state.world.chunks.values()) {
    for (const building of chunk.buildings) {
      if (building.falling && !building.destroyed) {
        building.fallAngle += dt * 2.8;
        if (building.fallAngle >= 1.28) {
          building.destroyed = true;
          building.falling = false;
          spawnDebrisBurst(building.x + building.w * 0.5, building.y + building.h * 0.75, building.chipColor, 22, building.fallDirection * 1.2, 0.8, 6);
        }
      }
    }
    for (const deco of chunk.decor) {
      if (deco.falling && !deco.destroyed) {
        deco.fallAngle += dt * 3.4;
        if (deco.fallAngle >= 1.2) {
          deco.destroyed = true;
          deco.falling = false;
          spawnDebrisBurst(deco.x, deco.y, deco.chipColor || "#777", 8, 0.6, 0.3, 4);
        }
      }
    }
  }
}

function updateDebris(dt) {
  for (let index = state.world.debris.length - 1; index >= 0; index -= 1) {
    const piece = state.world.debris[index];
    piece.life -= dt;
    if (piece.grounded) {
      if (!piece.settled) {
        piece.vy += CONFIG.debrisGravity * dt * 60 * 1.5;
        piece.vx *= 0.72;
        piece.vy *= 0.7;
        piece.x += piece.vx;
        piece.y += piece.vy;
        piece.rotation += piece.vr * 0.3;
        if (Math.hypot(piece.vx, piece.vy) < 0.4) {
          piece.vx = 0;
          piece.vy = 0;
          piece.settled = true;
        }
      }
    } else {
      piece.vy += CONFIG.debrisGravity * dt * 60;
      piece.vx *= 0.985;
      piece.vy *= 0.992;
      piece.x += piece.vx;
      piece.y += piece.vy;
      piece.rotation += piece.vr;
    }
    if (piece.life <= 0) {
      state.world.debris.splice(index, 1);
    }
  }
}

function updateTraps(dt) {
  state.world.playerSlowFactor = 1;
  for (let index = state.world.traps.length - 1; index >= 0; index -= 1) {
    const trap = state.world.traps[index];
    trap.life -= dt;
    trap.armedTimer = Math.max(0, trap.armedTimer - dt);

    if (trap.kind === "gas") {
      trap.radius = lerp(trap.radius || 40, 72, 0.03);
      const insideGas = distanceBetween(trap.x, trap.y, state.player.x, state.player.y) <= trap.radius + state.player.radius;
      if (insideGas) {
        state.world.playerSlowFactor = Math.min(state.world.playerSlowFactor, 0.52);
        trap.tickTimer -= dt;
        if (trap.tickTimer <= 0) {
          damagePlayer(2.4, trap.x, trap.y, 0.08);
          trap.tickTimer = 0.38;
        }
      }
    } else if (trap.kind === "tripwire") {
      if (!trap.triggered && trap.armedTimer <= 0) {
        const crossed = distanceToSegment(state.player.x, state.player.y, trap.x, trap.y, trap.x2, trap.y2) <= state.player.radius + 5;
        if (crossed) {
          trap.triggered = true;
          trap.strikeLife = 0.22;
          spawnTracer(trap.x, trap.y, state.player.x, state.player.y, "rgba(255, 130, 74, 1)", 5.2, 0.14);
          spawnVisualBurst(state.player.x, state.player.y, 32, "rgba(255, 154, 90, 0.82)");
          damagePlayer(18, trap.x, trap.y, 1.15);
        }
      }
      if (trap.triggered) {
        trap.strikeLife -= dt;
      }
    } else if (trap.armedTimer <= 0) {
      const hit = distanceBetween(trap.x, trap.y, state.player.x, state.player.y) <= trap.radius + state.player.radius;
      if (hit && trap.kind === "mine") {
        explodeAt(trap.x, trap.y, 84, 24, "#ff8456");
        trap.life = 0;
      } else if (hit && trap.kind === "teleportMine") {
        spawnVisualBurst(trap.x, trap.y, 54, "rgba(126, 102, 255, 0.88)");
        damagePlayer(20, trap.x, trap.y, 0.95);
        teleportPlayerRandomly();
        trap.life = 0;
      }
    }

    if (trap.life <= 0 || (trap.kind === "tripwire" && trap.triggered && trap.strikeLife <= 0)) {
      state.world.traps.splice(index, 1);
    }
  }
}

function updateProjectiles(dt) {
  for (let index = state.world.projectiles.length - 1; index >= 0; index -= 1) {
    const projectile = state.world.projectiles[index];
    if (projectile.kind === "ciaBomb") {
      projectile.x = state.player.x;
    }
    const previousX = projectile.x;
    const previousY = projectile.y;
    projectile.life -= dt;
    projectile.x += projectile.vx * dt * 60;
    projectile.y += projectile.vy * dt * 60;

    const hitBuilding = projectile.ownerType === "alien" ? false : lineOfSightBlocked(previousX, previousY, projectile.x, projectile.y);
    const hitPlayer = distanceBetween(projectile.x, projectile.y, state.player.x, state.player.y) <= projectile.radius + state.player.radius;

    if (projectile.life <= 0 || hitBuilding || hitPlayer) {
      if (projectile.instantKill) {
        explodeAt(state.player.x, state.player.y, projectile.blastRadius, projectile.damage, projectile.color);
      } else {
        explodeAt(projectile.x, projectile.y, projectile.blastRadius, projectile.damage, projectile.color);
      }
      state.world.projectiles.splice(index, 1);
    }
  }
}

function updateExplosions(dt) {
  for (let index = state.world.explosions.length - 1; index >= 0; index -= 1) {
    state.world.explosions[index].life -= dt;
    if (state.world.explosions[index].life <= 0) {
      state.world.explosions.splice(index, 1);
    }
  }
}

function updateNpcs(dt) {
  ensureChunkPopulation();
  for (let index = state.world.npcs.length - 1; index >= 0; index -= 1) {
    const npc = state.world.npcs[index];
    if (!npc.alive) {
      state.world.npcs.splice(index, 1);
      continue;
    }
    applyEarthquakeToNpc(npc, dt);
    if (npc.type === "civilian") {
      updateCivilian(npc, dt);
    } else if (npc.type === "animal") {
      updateAnimal(npc, dt);
    } else if (npc.type === "bird") {
      updateBird(npc, dt);
    } else if (npc.type === "police") {
      updatePolice(npc, dt);
    } else if (npc.type === "policeBoss") {
      updatePoliceBoss(npc, dt);
    } else if (npc.type === "militarySoldier") {
      updateMilitarySoldier(npc, dt);
    } else if (npc.type === "militaryGrenadier") {
      updateMilitaryGrenadier(npc, dt);
    } else if (npc.type === "militaryBoss") {
      updateMilitaryBoss(npc, dt);
    } else if (npc.type === "tank") {
      updateTank(npc, dt);
    } else if (npc.type === "cia") {
      updateCIA(npc, dt);
    } else if (npc.type === "alien") {
      updateAlien(npc, dt);
    } else {
      updateHelicopter(npc, dt);
    }
  }

  if (state.gameMode === "sandbox") {
    return;
  }

  state.world.alert = clamp(state.world.alert - CONFIG.alertDecayPerSecond * dt, 0, 100);
  state.world.policeSpawnCooldown -= dt;
  state.world.militarySpawnCooldown -= dt;
  state.world.ciaSpawnCooldown -= dt;
  state.world.alienSpawnCooldown -= dt;
  const policeCount = countNpcsByType("police");
  if (policeCount < desiredPoliceCount() && state.world.policeSpawnCooldown <= 0) {
    if (spawnPolice()) {
      state.world.policeSpawnCooldown = Math.max(1.25, CONFIG.policeSpawnCooldown - Math.sqrt(state.player.absorbedHumans) * 0.18);
    } else {
      state.world.policeSpawnCooldown = 0.75;
    }
  }

  if (shouldSpawnPoliceBoss() && !hasPoliceBoss()) {
    spawnPoliceBoss();
  }

  if (shouldSpawnMilitaryBoss() && !hasMilitaryBoss()) {
    spawnMilitaryBoss();
  }

  if (state.world.militarySpawnCooldown <= 0) {
    const desired = desiredMilitaryCounts();
    const spawnOrder = ["helicopter", "tank", "militaryGrenadier", "militarySoldier"];
    for (const type of spawnOrder) {
      if (countNpcsByType(type) < desired[type]) {
        if (spawnMilitary(type)) {
          state.world.militarySpawnCooldown = Math.max(1.2, CONFIG.militarySpawnCooldown - Math.sqrt(state.player.absorbedHumans) * 0.08);
        }
        break;
      }
    }
  }

  if (state.world.ciaSpawnCooldown <= 0 && countSquadsByType("cia") < desiredCIASquads()) {
    if (spawnCIASquad()) {
      state.world.ciaSpawnCooldown = CONFIG.ciaSpawnCooldown;
    } else {
      state.world.ciaSpawnCooldown = 1.2;
    }
  }

  if (state.world.alienSpawnCooldown <= 0 && countNpcsByType("alien") < desiredAlienCount()) {
    if (spawnAlien()) {
      state.world.alienSpawnCooldown = CONFIG.alienSpawnCooldown;
    } else {
      state.world.alienSpawnCooldown = 1.6;
    }
  }
}

// SECTION: player logic
function getPointerWorldTarget() {
  if (!state.pointer.active) {
    return { x: state.player.x, y: state.player.y };
  }
  return screenToWorld(state.pointer.x, state.pointer.y);
}

function getPlayerSpeedStats() {
  const size = state.player.absorbedHumans;
  const slowFactor = state.world.playerSlowFactor || 1;
  const feelRestore = 1.14;
  return {
    seekStrength: (CONFIG.mouseSeekBase + Math.sqrt(size) * (CONFIG.mouseSeekGrowth * 1.5) + size * 0.00022) * slowFactor * feelRestore,
    maxSpeed: (CONFIG.playerMaxSpeedBase + Math.sqrt(size) * (CONFIG.playerMaxSpeedGrowth * 1.55) + size * 0.032) * slowFactor * feelRestore,
  };
}

function getNodeRadius() {
  return 4.8 + Math.min(2.1, Math.sqrt(state.player.followers.length) * 0.18);
}

function getMorphSeed() {
  return Math.floor(state.time / 4.5) + state.player.absorbedHumans * 17;
}

function getMorphProfile() {
  const size = state.player.followers.length;
  const profiles = ["seed", "liquid", "star"];
  if (size >= 8) {
    profiles.push("spikes", "spider", "caterpillar");
  }
  if (size >= 16) {
    profiles.push("wings", "spaceship", "laughingFace", "abstract");
  }
  if (size >= 28) {
    profiles.push("insect", "bowArrow", "giantHand", "eyeball");
  }
  if (size >= 42) {
    profiles.push("bear", "monster", "crown");
  }
  if (size >= 56) {
    profiles.push("mutant");
  }
  return profiles[getMorphSeed() % profiles.length];
}

function getFollowerTarget(index, total, profile, dirX, dirY) {
  const forwardX = dirX || 1;
  const forwardY = dirY || 0;
  const rightX = -forwardY;
  const rightY = forwardX;
  const coreRadius = state.player.radius;
  const t = total <= 1 ? 0 : index / (total - 1);
  const seed = getMorphSeed();
  let localX = 0;
  let localY = 0;

  if (profile === "spider") {
    const leg = index % 8;
    const band = Math.floor(index / 8);
    const side = leg < 4 ? -1 : 1;
    const lane = leg % 4;
    localX = side * (coreRadius * 1.2 + lane * 4.5 + band * 2.2);
    localY = -coreRadius * 1.5 + lane * coreRadius * 0.95;
    if (lane === 0 || lane === 3) {
      localX *= 1.28;
    }
  } else if (profile === "spaceship") {
    const spine = t * 2 - 1;
    localX = Math.sin(spine * Math.PI) * coreRadius * 1.2;
    localY = -Math.abs(spine) * coreRadius * 3.1 + coreRadius * 1.4;
    if (index % 7 === 0) {
      localX *= 2.2;
      localY += coreRadius * 0.6;
    }
  } else if (profile === "caterpillar") {
    const segment = Math.floor(index / 6);
    const slot = index % 6;
    localY = coreRadius * 1.6 + segment * coreRadius * 0.9;
    localX = Math.cos((slot / 6) * Math.PI * 2) * (coreRadius * 0.7 - segment * 0.12);
    localY += Math.sin(segment * 0.9 + state.time * 3) * 4;
  } else if (profile === "laughingFace") {
    const angle = t * Math.PI * 2;
    const ring = coreRadius * 1.6;
    localX = Math.cos(angle) * ring;
    localY = Math.sin(angle) * ring;
    if (index % 11 === 0) {
      localX *= 0.35;
      localY = -coreRadius * 0.35;
    } else if (index % 11 === 5) {
      localX *= 0.35;
      localY = coreRadius * 0.65;
    }
  } else if (profile === "bowArrow") {
    if (t < 0.58) {
      const bowT = t / 0.58;
      localX = -Math.sin(bowT * Math.PI) * coreRadius * 2.4;
      localY = (bowT - 0.5) * coreRadius * 4.6;
    } else {
      const arrowT = (t - 0.58) / 0.42;
      localX = 0;
      localY = -coreRadius * 2.6 + arrowT * coreRadius * 5.6;
      if (arrowT < 0.25) {
        localX = (arrowT < 0.125 ? -1 : 1) * coreRadius * 1.3;
      }
    }
  } else if (profile === "giantHand") {
    const digit = index % 5;
    const band = Math.floor(index / 5);
    localX = (digit - 2) * coreRadius * 0.9;
    localY = -coreRadius * 0.6 - band * coreRadius * 0.8;
    if (digit === 0) {
      localX -= coreRadius * 0.9;
      localY += coreRadius * 0.75;
    }
  } else if (profile === "liquid") {
    const angle = t * Math.PI * 2;
    const wobble = 0.7 + Math.sin(angle * 3 + state.time * 3.6) * 0.28 + Math.cos(angle * 5 + state.time * 2.4) * 0.14;
    localX = Math.cos(angle) * coreRadius * wobble * 1.4;
    localY = Math.sin(angle) * coreRadius * wobble * 1.7;
  } else if (profile === "bear") {
    const angle = t * Math.PI * 2;
    localX = Math.cos(angle) * coreRadius * 1.3;
    localY = Math.sin(angle) * coreRadius * 1.35;
    if (index % 12 === 0) {
      localX -= coreRadius * 0.9;
      localY -= coreRadius * 1.3;
    } else if (index % 12 === 6) {
      localX += coreRadius * 0.9;
      localY -= coreRadius * 1.3;
    }
  } else if (profile === "star") {
    const angle = t * Math.PI * 2;
    const spike = index % 2 === 0 ? coreRadius * 2.2 : coreRadius * 0.75;
    localX = Math.cos(angle) * spike;
    localY = Math.sin(angle) * spike;
  } else if (profile === "eyeball") {
    const angle = t * Math.PI * 2;
    localX = Math.cos(angle) * coreRadius * 2.3;
    localY = Math.sin(angle) * coreRadius * 1.35;
    if (index % 10 === 0) {
      localX *= 0.28;
      localY *= 0.28;
    }
  } else if (profile === "monster") {
    const angle = t * Math.PI * 2;
    const jag = 0.8 + (Math.sin(angle * 7 + state.time * 4.5) > 0 ? 1.35 : 0.25);
    localX = Math.cos(angle) * coreRadius * jag * 1.55;
    localY = Math.sin(angle) * coreRadius * jag * 1.35;
  } else if (profile === "abstract") {
    const ribbon = t * Math.PI * 4;
    localX = Math.sin(ribbon + state.time * 1.8) * coreRadius * 1.9;
    localY = (t - 0.5) * coreRadius * 5.2 + Math.cos(ribbon * 0.5 + state.time * 2.2) * coreRadius * 0.7;
  } else if (profile === "mutant") {
    const partType = (seed + index) % 5;
    const angle = t * Math.PI * 2;
    const lobe = 1 + Math.sin(angle * (2 + (seed % 4)) + seed * 0.17) * 0.45;
    localX = Math.cos(angle) * coreRadius * (1.1 + lobe) * 0.9;
    localY = Math.sin(angle) * coreRadius * (0.8 + lobe) * 1.1;
    if (partType === 0) {
      localX *= 2.1;
    } else if (partType === 1) {
      localY *= 2.2;
    } else if (partType === 2) {
      localX += Math.sin(seed + index) * coreRadius * 1.6;
    } else if (partType === 3) {
      localY -= coreRadius * 1.8;
    }
  } else if (profile === "spikes") {
    const angle = t * Math.PI * 2;
    const spike = index % 3 === 0 ? coreRadius * 1.6 : coreRadius * 0.85;
    localX = Math.cos(angle) * spike;
    localY = Math.sin(angle) * spike;
  } else if (profile === "wings") {
    if (t < 0.18) {
      const bodyT = t / 0.18;
      localX = (bodyT - 0.5) * coreRadius * 1.2;
      localY = (bodyT - 0.5) * coreRadius * 3.2;
    } else {
      const wingT = (t - 0.18) / 0.82;
      const side = wingT < 0.5 ? -1 : 1;
      const sideT = wingT < 0.5 ? wingT / 0.5 : (wingT - 0.5) / 0.5;
      localX = side * lerp(coreRadius * 0.8, coreRadius * 3.7, sideT);
      localY = Math.sin(sideT * Math.PI) * coreRadius * 1.2 - coreRadius * 0.35;
    }
  } else if (profile === "insect") {
    const group = index % 6;
    const band = Math.floor(index / 6);
    if (group < 2) {
      localX = (group === 0 ? -1 : 1) * (coreRadius * 1.3 + band * 2.2);
      localY = -coreRadius * 1.2 - band * 3.8;
    } else if (group < 4) {
      localX = (group === 2 ? -1 : 1) * (coreRadius * 1.7 + band * 2.8);
      localY = coreRadius * 0.2 + band * 1.5;
    } else {
      localX = (group === 4 ? -1 : 1) * (coreRadius * 0.8 + band * 2.2);
      localY = coreRadius * 1.3 + band * 3.6;
    }
  } else if (profile === "crown") {
    const sideT = t * 2 - 1;
    localX = sideT * coreRadius * 2.8;
    localY = -Math.abs(sideT) * coreRadius * 0.4 - Math.cos(sideT * Math.PI * 2) * coreRadius * 1.4;
    if (index % 4 === 0) {
      localY -= coreRadius * 1.8;
    }
  } else {
    const angle = t * Math.PI * 2;
    const radius = coreRadius * 0.72 + Math.sin(t * Math.PI * 6 + state.time * 2.4) * 1.5;
    localX = Math.cos(angle) * radius;
    localY = Math.sin(angle) * radius;
  }

  return {
    x: state.player.x + rightX * localX + forwardX * localY,
    y: state.player.y + rightY * localX + forwardY * localY,
  };
}

function updatePlayer(dt) {
  const target = getPointerWorldTarget();
  const dx = target.x - state.player.x;
  const dy = target.y - state.player.y;
  const distance = Math.hypot(dx, dy) || 0.0001;
  const dirX = dx / distance;
  const dirY = dy / distance;
  const speedStats = getPlayerSpeedStats();
  const growthStats = getPlayerGrowthStats();

  state.player.maxHealth = growthStats.maxHealth;
  state.player.health = Math.min(state.player.maxHealth, state.player.health + dt * (0.08 + Math.sqrt(state.player.absorbedHumans + 1) * 0.02));

  state.player.lastDirX = dirX;
  state.player.lastDirY = dirY;
  state.player.vx += dx * speedStats.seekStrength * dt * 60;
  state.player.vy += dy * speedStats.seekStrength * dt * 60;
  state.player.vx *= CONFIG.playerDrag;
  state.player.vy *= CONFIG.playerDrag;

  const speed = Math.hypot(state.player.vx, state.player.vy);
  if (speed > speedStats.maxSpeed) {
    const factor = speedStats.maxSpeed / speed;
    state.player.vx *= factor;
    state.player.vy *= factor;
  }

  state.player.x += state.player.vx;
  state.player.y += state.player.vy;
  state.player.radius = CONFIG.playerRadiusBase + Math.min(26, Math.sqrt(state.player.followers.length) * CONFIG.playerRadiusGrowth);
  resolveEntityAgainstBuildings(state.player, state.player.radius);
  resolveEntityAgainstCIAWormHoles(state.player, state.player.radius);
  state.player.morphName = getMorphProfile();
  leaveBloodTrail(dt);
  const nodeRadius = getNodeRadius();

  const total = state.player.followers.length;
  for (let index = 0; index < total; index += 1) {
    const follower = state.player.followers[index];
    follower.radius = nodeRadius;
    const targetPoint = getFollowerTarget(index, total, state.player.morphName, state.player.lastDirX, state.player.lastDirY);
    follower.vx += (targetPoint.x - follower.x) * CONFIG.followerSpring;
    follower.vy += (targetPoint.y - follower.y) * CONFIG.followerSpring;
    follower.vx += (state.player.x - follower.x) * 0.007;
    follower.vy += (state.player.y - follower.y) * 0.007;

    if (index > 0) {
      const prev = state.player.followers[index - 1];
      follower.vx += (prev.x - follower.x) * 0.022;
      follower.vy += (prev.y - follower.y) * 0.022;
    }

    follower.vx *= CONFIG.followerDrag;
    follower.vy *= CONFIG.followerDrag;

    const followerSpeed = Math.hypot(follower.vx, follower.vy);
    if (followerSpeed > CONFIG.followerMaxSpeed) {
      const factor = CONFIG.followerMaxSpeed / followerSpeed;
      follower.vx *= factor;
      follower.vy *= factor;
    }

    follower.x += follower.vx;
    follower.y += follower.vy;
  }

  const playerSpeed = Math.hypot(state.player.vx, state.player.vy);
  state.player.slimeTimer -= dt * (1 + playerSpeed * 0.4);
  if (playerSpeed > 0.12 && state.player.slimeTimer <= 0) {
    playSlimeSound(0.8 + Math.sqrt(state.player.followers.length) * 0.06);
    state.player.slimeTimer = Math.max(0.08, 0.34 - Math.sqrt(state.player.followers.length) * 0.015);
  }
}

function updateTracers(dt) {
  for (let index = state.world.tracers.length - 1; index >= 0; index -= 1) {
    state.world.tracers[index].life -= dt;
    if (state.world.tracers[index].life <= 0) {
      state.world.tracers.splice(index, 1);
    }
  }
}

function updateGame(dt) {
  if (state.gameOver || !state.gameStarted) {
    return;
  }
  ensureChunksAroundPlayer();
  if (state.gameMode !== "sandbox" && shouldSpawnCIABoss()) {
    const angle = Math.random() * Math.PI * 2;
    const distance = 180 + Math.random() * 220;
    triggerCIAWormSummon(
      state.player.x + Math.cos(angle) * distance,
      state.player.y + Math.sin(angle) * distance,
    );
  }
  if (state.world.ciaWorm?.cutscene) {
    updateCIAWorm(dt);
    updateExplosions(dt);
    updateDebris(dt);
    updateBlood(dt);
    updateTracers(dt);
    return;
  }
  updatePlayer(dt);
  updateStructureDamage(dt);
  updateFallingStructures(dt);
  updateBaseDefenses(dt);
  updateNpcs(dt);
  updateCIAWorm(dt);
  updateTraps(dt);
  updateProjectiles(dt);
  updateExplosions(dt);
  updateDebris(dt);
  updateBlood(dt);
  updateTracers(dt);
}

function resetGame() {
  state.world.chunks = new Map();
  state.world.npcs = [];
  state.world.tracers = [];
  state.world.projectiles = [];
  state.world.explosions = [];
  state.world.debris = [];
  state.world.traps = [];
  state.world.blood = [];
  state.world.nextNpcId = 1;
  state.world.alert = 0;
  state.world.policeSpawnCooldown = 0;
  state.world.militarySpawnCooldown = 0;
  state.world.ciaSpawnCooldown = 0;
  state.world.alienSpawnCooldown = 0;
  state.world.playerSlowFactor = 1;
  state.world.policeDeathsTotal = 0;
  state.world.policeBossSpawned = false;
  state.world.militaryDeathsTotal = 0;
  state.world.militaryBossSpawned = false;
  state.world.ciaDeathsTotal = 0;
  state.world.ciaBossSpawned = false;
  state.world.ciaWorm = createCIAWormState();
  state.time = 0;
  state.lastTime = 0;
  state.gameOver = false;
  state.camera.focusX = null;
  state.camera.focusY = null;
  state.camera.shakeX = 0;
  state.camera.shakeY = 0;

  state.player.x = 0;
  state.player.y = 0;
  state.player.vx = 0;
  state.player.vy = 0;
  state.player.radius = CONFIG.playerRadiusBase;
  state.player.health = 100;
  state.player.absorbedHumans = 0;
  state.player.followers = [];
  state.player.lastDirX = 1;
  state.player.lastDirY = 0;
  state.player.morphName = "seed";
  state.player.slimeTimer = 0;
  state.player.bloodTimer = 0;
  gainBiomass(5, 0, 0);

  state.pointer.active = false;
  state.pointer.x = state.width * 0.5;
  state.pointer.y = state.height * 0.5;

  ensureChunksAroundPlayer();
  if (state.gameMode !== "sandbox") {
    ensureChunkPopulation();
  }
  resetButton.textContent = state.gameMode === "sandbox" ? "Reset Arena" : "Reset Town";
  updateHud();
  updateSandboxUi();
}

function updateHud() {
  if (!state.gameStarted) {
    particleCountLabel.textContent = "Press Play to enter the town.";
    return;
  }
  if (state.gameMode === "sandbox") {
    particleCountLabel.textContent = `Sandbox | Health ${Math.round(state.player.health)}/${Math.round(state.player.maxHealth)} | Consumed ${state.player.absorbedHumans} | Press F for spawn menu`;
    updateSandboxUi();
    return;
  }
  if (state.world.ciaWorm?.cutscene) {
    particleCountLabel.textContent = "CIA ritual in progress | A portal is opening beneath the town";
    updateSandboxUi();
    return;
  }
  const militaryCount =
    countNpcsByType("militarySoldier") +
    countNpcsByType("militaryGrenadier") +
    countNpcsByType("militaryBoss") +
    countNpcsByType("tank") +
    countNpcsByType("helicopter");
  const ciaCount = countNpcsByType("cia") + (state.world.ciaWorm?.active || state.world.ciaWorm?.cutscene ? 1 : 0);
  const alienCount = countNpcsByType("alien");
  const dayNight = getDayNightState();
  particleCountLabel.textContent = `Health ${Math.round(state.player.health)}/${Math.round(state.player.maxHealth)} | Alert ${Math.round(state.world.alert)} | ${dayNight.label} | Consumed ${state.player.absorbedHumans} | Police ${countNpcsByType("police")} | Military ${militaryCount} | CIA ${ciaCount} | Aliens ${alienCount} | Morph ${state.player.morphName}`;
  updateSandboxUi();
}

// SECTION: rendering
function drawRoad(rect) {
  const screen = worldToScreen(rect.x, rect.y);
  ctx.fillStyle = rect.type === "lane" ? "#8f969d" : "#69717a";
  ctx.fillRect(screen.x, screen.y, rect.w, rect.h);

  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.lineWidth = 2;
  if (rect.type === "horizontal") {
    ctx.setLineDash([14, 18]);
    ctx.beginPath();
    ctx.moveTo(screen.x, screen.y + rect.h * 0.5);
    ctx.lineTo(screen.x + rect.w, screen.y + rect.h * 0.5);
    ctx.stroke();
  } else if (rect.type === "vertical") {
    ctx.setLineDash([14, 18]);
    ctx.beginPath();
    ctx.moveTo(screen.x + rect.w * 0.5, screen.y);
    ctx.lineTo(screen.x + rect.w * 0.5, screen.y + rect.h);
    ctx.stroke();
  }
  ctx.setLineDash([]);
}

function drawBuilding(building) {
  if (building.destroyed) {
    return;
  }
  const screen = worldToScreen(building.x, building.y);
  if (building.falling) {
    ctx.save();
    ctx.translate(screen.x + building.w * 0.5, screen.y + building.h);
    ctx.rotate(building.fallAngle * 0.9 * building.fallDirection);
    ctx.fillStyle = building.tint || "#bda58b";
    ctx.fillRect(-building.w * 0.5, -building.h, building.w, building.h);
    ctx.restore();
    return;
  }
  ctx.fillStyle = building.tint || "#bda58b";
  ctx.fillRect(screen.x, screen.y, building.w, building.h);
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(screen.x, screen.y + building.h - 10, building.w, 10);

  ctx.fillStyle = building.kind === "marketHall" ? "rgba(176, 62, 62, 0.75)" : "rgba(255, 242, 212, 0.72)";
  if (building.kind === "marketHall") {
    ctx.fillRect(screen.x, screen.y, building.w, 14);
  } else if (building.kind === "skyscraper") {
    ctx.fillStyle = "#5e6976";
    ctx.fillRect(screen.x, screen.y, building.w, building.h);
    ctx.fillStyle = "#8c9aac";
    for (let y = 18; y < building.h - 24; y += 22) {
      for (let x = 14; x < building.w - 18; x += 18) {
        ctx.fillRect(screen.x + x, screen.y + y, 8, 10);
      }
    }
  } else if (building.kind === "officeTower") {
    ctx.fillStyle = "#66707b";
    ctx.fillRect(screen.x, screen.y, building.w, building.h);
    ctx.fillStyle = "#a2b1bf";
    for (let y = 18; y < building.h - 18; y += 24) {
      ctx.fillRect(screen.x + 14, screen.y + y, building.w - 28, 8);
    }
  } else if (building.kind === "militaryBase") {
    ctx.fillStyle = "#40513f";
    ctx.fillRect(screen.x, screen.y, building.w, 12);
    ctx.fillStyle = "#d4d9cb";
    ctx.font = "600 10px Segoe UI";
    ctx.textAlign = "center";
    ctx.fillText("Base", screen.x + building.w * 0.5, screen.y + 10);
    ctx.textAlign = "left";
    ctx.fillStyle = "#90a084";
    ctx.fillRect(screen.x + 16, screen.y + 20, building.w - 32, 16);
    ctx.fillStyle = "#2a3228";
    ctx.fillRect(screen.x + building.w * 0.5 - 14, screen.y - 6, 28, 6);
    ctx.fillRect(screen.x + building.w * 0.5 - 3, screen.y - 18, 6, 18);
    ctx.strokeStyle = "#20251e";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(screen.x + building.w * 0.5, screen.y - 18);
    ctx.lineTo(screen.x + building.w * 0.5 + 24, screen.y - 26);
    ctx.stroke();
    ctx.fillStyle = "#1f2420";
    ctx.fillRect(screen.x + building.w * 0.5 + 18, screen.y - 30, 12, 6);
  } else if (building.kind === "militaryAnnex") {
    ctx.fillStyle = "#8f9985";
    ctx.fillRect(screen.x + 12, screen.y + 8, building.w - 24, building.h - 16);
  } else if (building.kind === "ciaBase") {
    ctx.fillStyle = "rgba(48, 50, 58, 0.78)";
    ctx.fillRect(screen.x, screen.y, building.w, 12);
    ctx.fillStyle = "rgba(228, 232, 238, 0.82)";
    ctx.font = "600 10px Segoe UI";
    ctx.textAlign = "center";
    ctx.fillText("Agency", screen.x + building.w * 0.5, screen.y + 10);
    ctx.textAlign = "left";
    ctx.fillStyle = "#7a7e88";
    ctx.fillRect(screen.x + 18, screen.y + 20, building.w - 36, 14);
    ctx.fillStyle = "#bbc1cb";
    for (let x = 18; x < building.w - 18; x += 26) {
      ctx.fillRect(screen.x + x, screen.y + 46, 10, 16);
    }
  } else if (building.kind === "ciaAnnex") {
    ctx.fillStyle = "#878b94";
    ctx.fillRect(screen.x + 12, screen.y + 8, building.w - 24, building.h - 16);
  } else if (building.kind === "policeStation") {
    ctx.fillStyle = "rgba(54, 72, 94, 0.75)";
    ctx.fillRect(screen.x, screen.y, building.w, 12);
    ctx.fillStyle = "rgba(236, 242, 247, 0.8)";
    ctx.font = "600 10px Segoe UI";
    ctx.textAlign = "center";
    ctx.fillText("Precinct", screen.x + building.w * 0.5, screen.y + 10);
    ctx.textAlign = "left";
    ctx.fillStyle = "#cfd8df";
    ctx.fillRect(screen.x + 16, screen.y + 20, building.w - 32, 16);
    for (let x = 20; x < building.w - 20; x += 30) {
      ctx.fillStyle = "#d8e7f1";
      ctx.fillRect(screen.x + x, screen.y + 48, 12, 18);
    }
  } else if (building.kind === "policeAnnex") {
    ctx.fillStyle = "#c7d2dc";
    ctx.fillRect(screen.x + 12, screen.y + 8, building.w - 24, building.h - 16);
  } else if (building.kind === "farmhouse") {
    ctx.fillStyle = "#efe2c6";
    ctx.fillRect(screen.x, screen.y + 14, building.w, building.h - 14);
    ctx.fillStyle = "#94634f";
    ctx.beginPath();
    ctx.moveTo(screen.x - 4, screen.y + 18);
    ctx.lineTo(screen.x + building.w * 0.5, screen.y - 12);
    ctx.lineTo(screen.x + building.w + 4, screen.y + 18);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#815845";
    ctx.fillRect(screen.x + building.w * 0.45, screen.y + building.h - 28, 16, 28);
  } else if (building.kind === "barn") {
    ctx.fillStyle = "#a04e42";
    ctx.fillRect(screen.x, screen.y + 12, building.w, building.h - 12);
    ctx.fillStyle = "#6f342c";
    ctx.beginPath();
    ctx.moveTo(screen.x - 4, screen.y + 14);
    ctx.lineTo(screen.x + building.w * 0.5, screen.y - 18);
    ctx.lineTo(screen.x + building.w + 4, screen.y + 14);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#e9d5bf";
    ctx.fillRect(screen.x + building.w * 0.45, screen.y + building.h - 38, 22, 38);
  } else {
    for (let y = 14; y < building.h - 18; y += 26) {
      for (let x = 14; x < building.w - 18; x += 24) {
        ctx.fillRect(screen.x + x, screen.y + y, 10, 10);
      }
    }
  }
}

function drawDecor(deco) {
  if (deco.destroyed) {
    return;
  }
  if (deco.occupied) {
    return;
  }
  const screen = worldToScreen(deco.x, deco.y);
  if (deco.type === "tree") {
    if (deco.falling) {
      ctx.save();
      ctx.translate(screen.x, screen.y);
      ctx.rotate(Math.min(1.1, deco.fallAngle));
      ctx.fillStyle = "#3f6c49";
      ctx.beginPath();
      ctx.arc(0, 0, deco.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#684c34";
      ctx.fillRect(-3, 0, 6, deco.size + 8);
      ctx.restore();
      return;
    }
    ctx.fillStyle = "#3f6c49";
    ctx.beginPath();
    ctx.arc(screen.x, screen.y, deco.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#684c34";
    ctx.fillRect(screen.x - 3, screen.y, 6, deco.size + 8);
  } else if (deco.type === "lamp") {
    const lampHeight = deco.height || 18;
    ctx.strokeStyle = "#555761";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(screen.x, screen.y);
    ctx.lineTo(screen.x, screen.y - lampHeight);
    ctx.stroke();
    if (getDayNightState().darkness > 0.35) {
      const glow = ctx.createRadialGradient(screen.x, screen.y - lampHeight - 2, 0, screen.x, screen.y - lampHeight - 2, 24);
      glow.addColorStop(0, `rgba(255, 227, 148, ${(0.2 + getDayNightState().darkness * 0.18).toFixed(3)})`);
      glow.addColorStop(1, "rgba(255, 227, 148, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(screen.x, screen.y - lampHeight - 2, 24, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "#f2dc8a";
    ctx.beginPath();
    ctx.arc(screen.x, screen.y - lampHeight - 2, 4, 0, Math.PI * 2);
    ctx.fill();
  } else if (deco.type === "stall") {
    ctx.fillStyle = "#775440";
    ctx.fillRect(screen.x, screen.y + 10, deco.w, deco.h - 10);
    ctx.fillStyle = deco.awning;
    ctx.fillRect(screen.x, screen.y, deco.w, 14);
  } else if (deco.type === "river") {
    ctx.fillStyle = "#69a3cf";
    ctx.fillRect(screen.x, screen.y, deco.w, deco.h);
    ctx.fillStyle = "rgba(255,255,255,0.18)";
    for (let x = 0; x < deco.w; x += 46) {
      ctx.fillRect(screen.x + x, screen.y + deco.h * 0.3, 24, 3);
    }
  } else if (deco.type === "serviceStop") {
    ctx.fillStyle = "#d6c2a1";
    ctx.fillRect(screen.x, screen.y + 20, deco.w, deco.h - 20);
    ctx.fillStyle = "#b44d3d";
    ctx.fillRect(screen.x, screen.y, deco.w, 22);
  } else if (deco.type === "cactus") {
    ctx.fillStyle = "#5f8c53";
    ctx.fillRect(screen.x - 5, screen.y - deco.size, 10, deco.size * 2);
    ctx.fillRect(screen.x - 14, screen.y - 4, 8, deco.size);
    ctx.fillRect(screen.x + 6, screen.y - 2, 8, deco.size * 0.8);
  } else if (deco.type === "tumbleweed") {
    ctx.strokeStyle = "#9a7b4d";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(screen.x, screen.y, deco.size, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(screen.x - deco.size, screen.y);
    ctx.lineTo(screen.x + deco.size, screen.y);
    ctx.moveTo(screen.x, screen.y - deco.size);
    ctx.lineTo(screen.x, screen.y + deco.size);
    ctx.stroke();
  } else if (deco.type === "flower") {
    ctx.fillStyle = deco.color || "#8b63c5";
    ctx.beginPath();
    ctx.arc(screen.x, screen.y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#4c8644";
    ctx.fillRect(screen.x - 1, screen.y, 2, 8);
  } else if (deco.type === "plaza") {
    ctx.fillStyle = "#c9c2b2";
    ctx.fillRect(screen.x, screen.y, deco.w, deco.h);
  } else if (deco.type === "policeCar" || deco.type === "civilianCar" || deco.type === "ciaCar") {
    if (deco.falling) {
      ctx.save();
      ctx.translate(screen.x + deco.w * 0.5, screen.y + deco.h * 0.5);
      ctx.rotate(Math.min(1.2, deco.fallAngle) * 0.8);
      ctx.fillStyle =
        deco.type === "policeCar" ? "#1d3156" :
        deco.type === "ciaCar" ? "#111214" :
        (deco.color || "#6f8fae");
      ctx.fillRect(-deco.w * 0.5, -deco.h * 0.5, deco.w, deco.h);
      ctx.restore();
      return;
    }
    ctx.fillStyle =
      deco.type === "policeCar" ? "#1d3156" :
      deco.type === "ciaCar" ? "#111214" :
      (deco.color || "#6f8fae");
    ctx.fillRect(screen.x, screen.y, deco.w, deco.h);
    ctx.fillStyle = deco.type === "ciaCar" ? "#27313c" : "#d5e7f5";
    ctx.fillRect(screen.x + 10, screen.y + 4, deco.w - 20, deco.h - 8);
    if (deco.type === "policeCar") {
      ctx.fillStyle = "#cb3030";
      ctx.fillRect(screen.x + 6, screen.y + 7, 8, 5);
      ctx.fillStyle = "#3d87d4";
      ctx.fillRect(screen.x + deco.w - 14, screen.y + 7, 8, 5);
    } else if (deco.type === "ciaCar") {
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      ctx.fillRect(screen.x + 6, screen.y + 2, deco.w - 12, 2);
    } else {
      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.fillRect(screen.x + 5, screen.y + 2, deco.w - 10, 2);
    }
    ctx.fillStyle = "#17181d";
    ctx.fillRect(screen.x + 4, screen.y - 2, 8, 4);
    ctx.fillRect(screen.x + deco.w - 12, screen.y - 2, 8, 4);
    ctx.fillRect(screen.x + 4, screen.y + deco.h - 2, 8, 4);
    ctx.fillRect(screen.x + deco.w - 12, screen.y + deco.h - 2, 8, 4);
  }
}

function drawTown() {
  const dayNight = getDayNightState();
  ctx.fillStyle = `rgba(${Math.round(132 + dayNight.daylight * 78)}, ${Math.round(150 + dayNight.daylight * 60)}, ${Math.round(168 + dayNight.daylight * 40)}, 1)`;
  ctx.fillRect(0, 0, state.width, state.height);

  for (const chunk of getLoadedChunks()) {
    const screen = worldToScreen(chunk.originX, chunk.originY);
    const zone = chunk.zone || "neighborhood";
    const biome = chunk.biome || zone;
    const zoneFill =
      zone === "neighborhood" ? `rgba(${Math.round(128 + dayNight.daylight * 92)}, ${Math.round(155 + dayNight.daylight * 88)}, ${Math.round(114 + dayNight.daylight * 86)}, 1)` :
      zone === "city" ? `rgba(${Math.round(106 + dayNight.daylight * 54)}, ${Math.round(110 + dayNight.daylight * 56)}, ${Math.round(112 + dayNight.daylight * 58)}, 1)` :
      zone === "desert" ? `rgba(${Math.round(168 + dayNight.daylight * 70)}, ${Math.round(142 + dayNight.daylight * 62)}, ${Math.round(88 + dayNight.daylight * 42)}, 1)` :
      biome === "farm" ? `rgba(${Math.round(144 + dayNight.daylight * 88)}, ${Math.round(166 + dayNight.daylight * 82)}, ${Math.round(98 + dayNight.daylight * 64)}, 1)` :
      `rgba(${Math.round(96 + dayNight.daylight * 78)}, ${Math.round(128 + dayNight.daylight * 86)}, ${Math.round(88 + dayNight.daylight * 74)}, 1)`;
    ctx.fillStyle = zoneFill;
    ctx.fillRect(screen.x, screen.y, CONFIG.chunkSize, CONFIG.chunkSize);
    for (const road of chunk.roads) {
      drawRoad(road);
    }
    for (const building of chunk.buildings) {
      drawBuilding(building);
    }
    for (const deco of chunk.decor) {
      drawDecor(deco);
    }
  }
}

function drawDebris() {
  for (const piece of state.world.debris) {
    const screen = worldToScreen(piece.x, piece.y);
    const fade = piece.maxLife ? clamp(piece.life / piece.maxLife, 0, 1) : 1;
    ctx.save();
    ctx.translate(screen.x, screen.y);
    ctx.rotate(piece.rotation);
    const baseColor = piece.color;
    const pieceColor = baseColor.startsWith("rgba(")
      ? baseColor.replace(/rgba\(([^)]+),\s*([0-9.]+)\)/, (_match, rgb, alpha) => `rgba(${rgb}, ${(Number(alpha) * fade).toFixed(3)})`)
      : baseColor;
    ctx.fillStyle = pieceColor;
    if (piece.shape === "chunk") {
      ctx.beginPath();
      ctx.ellipse(0, 0, piece.size * 0.55, piece.size * 0.38 * (piece.stretch || 1), 0, 0, Math.PI * 2);
      ctx.fill();
    } else if (piece.shape === "strip") {
      ctx.beginPath();
      ctx.ellipse(0, 0, piece.size * 0.26, piece.size * 0.8 * (piece.stretch || 1), 0, 0, Math.PI * 2);
      ctx.fill();
    } else if (piece.shape === "curl") {
      ctx.strokeStyle = pieceColor;
      ctx.lineWidth = Math.max(1.2, piece.size * 0.18);
      ctx.beginPath();
      ctx.arc(0, 0, piece.size * 0.38, Math.PI * 0.1, Math.PI * 1.35);
      ctx.stroke();
    } else {
      ctx.fillRect(-piece.size * 0.5, -piece.size * 0.5, piece.size, piece.size);
    }
    ctx.restore();
  }
}

function drawBlood() {
  for (const stain of state.world.blood) {
    const screen = worldToScreen(stain.x, stain.y);
    if (
      screen.x + 70 < 0 ||
      screen.x - 70 > state.width ||
      screen.y + 70 < 0 ||
      screen.y - 70 > state.height
    ) {
      continue;
    }

    ctx.save();
    ctx.translate(screen.x, screen.y);
    ctx.rotate(stain.rotation);
    ctx.fillStyle = `rgba(122, 8, 8, ${stain.alpha.toFixed(3)})`;
    ctx.beginPath();
    ctx.ellipse(0, 0, stain.radius, Math.max(1.6, stain.radius * 0.64), 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = `rgba(168, 18, 18, ${(stain.alpha * 0.7).toFixed(3)})`;
    ctx.beginPath();
    ctx.ellipse(stain.smearX, stain.smearY, Math.max(1.4, stain.radius * 0.35), Math.max(1.2, stain.radius * 0.22), 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function drawCIAWormHoles() {
  const worm = state.world.ciaWorm;
  if (!worm) {
    return;
  }
  for (const hole of worm.holes) {
    const screen = worldToScreen(hole.x, hole.y);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.ellipse(screen.x, screen.y, hole.radius, hole.radius * 0.72, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = Math.max(3, hole.radius * 0.04);
    ctx.beginPath();
    ctx.ellipse(screen.x, screen.y, hole.radius * 0.92, hole.radius * 0.62, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawCIAWormDust() {
  const worm = state.world.ciaWorm;
  if (!worm) {
    return;
  }
  for (const dust of worm.dust) {
    const screen = worldToScreen(dust.x, dust.y);
    const fade = clamp(dust.life / dust.maxLife, 0, 1);
    ctx.fillStyle = `rgba(98, 74, 62, ${(fade * 0.35).toFixed(3)})`;
    ctx.beginPath();
    ctx.arc(screen.x, screen.y, dust.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawCIAWorm() {
  const worm = state.world.ciaWorm;
  if (!worm) {
    return;
  }

  if (worm.cutscene) {
    const portal = worldToScreen(worm.portalX, worm.portalY);
    const pulse = 1 + Math.sin(worm.cutsceneTimer * 5.5) * 0.08;
    const portalRadius = 58 + Math.min(40, worm.cutsceneTimer * 12);
    const portalGradient = ctx.createRadialGradient(portal.x, portal.y, 10, portal.x, portal.y, portalRadius * 1.35);
    portalGradient.addColorStop(0, "rgba(12, 7, 18, 0.94)");
    portalGradient.addColorStop(0.55, "rgba(126, 26, 52, 0.72)");
    portalGradient.addColorStop(1, "rgba(98, 18, 40, 0)");
    ctx.fillStyle = portalGradient;
    ctx.beginPath();
    ctx.arc(portal.x, portal.y, portalRadius * pulse, 0, Math.PI * 2);
    ctx.fill();

    for (let index = 0; index < 4; index += 1) {
      const angle = Math.PI * 0.25 + index * (Math.PI / 2);
      const manX = portal.x + Math.cos(angle) * 70;
      const manY = portal.y + Math.sin(angle) * 48;
      ctx.fillStyle = "#101114";
      ctx.beginPath();
      ctx.arc(manX, manY, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#0b0c0f";
      ctx.fillRect(manX - 5, manY + 2, 10, 20);
    }

    if (worm.cutsceneTimer > 2) {
      const mouthOpen = 0.45 + Math.abs(Math.sin(worm.chompPhase)) * 0.55;
      ctx.save();
      ctx.translate(portal.x, portal.y);
      ctx.scale(2.35, 1.7);
      ctx.fillStyle = "#d8b4aa";
      ctx.beginPath();
      ctx.ellipse(0, -18, 110, 82, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#58231d";
      ctx.beginPath();
      ctx.ellipse(0, -12, 68, 32 + mouthOpen * 34, 0, 0, Math.PI * 2);
      ctx.fill();
      for (let index = 0; index < 22; index += 1) {
        const toothX = -62 + index * 5.8;
        ctx.fillStyle = "#f0ece6";
        ctx.beginPath();
        ctx.moveTo(toothX, -26);
        ctx.lineTo(toothX + 3.5, -2 + mouthOpen * 9);
        ctx.lineTo(toothX + 7, -26);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(toothX, 2);
        ctx.lineTo(toothX + 3.5, -18 - mouthOpen * 12);
        ctx.lineTo(toothX + 7, 2);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }
    return;
  }

  if (!worm.visible) {
    return;
  }

  const segments = worm.mode === "surface" ? worm.trail : [{ x: worm.x, y: worm.y, radius: CONFIG.ciaWormBodyRadius }];
  for (let index = segments.length - 1; index >= 0; index -= 1) {
    const segment = segments[index];
    const screen = worldToScreen(segment.x, segment.y);
    const scale = 1 - index / Math.max(segments.length + 2, 3);
    const radius = segment.radius * (0.42 + scale * 0.92);
    ctx.fillStyle = index === 0 ? "#d9b2a7" : "#cf9e93";
    ctx.beginPath();
    ctx.ellipse(screen.x, screen.y, radius * 1.34, radius * 1.02, Math.atan2(worm.dirY, worm.dirX), 0, Math.PI * 2);
    ctx.fill();
  }

  const head = worldToScreen(worm.x, worm.y);
  const headAngle = Math.atan2(worm.dirY, worm.dirX);
  const mouthOpen = 0.55 + Math.abs(Math.sin(worm.chompPhase)) * 0.6;
  ctx.save();
  ctx.translate(head.x, head.y);
  ctx.rotate(headAngle);
  ctx.fillStyle = "#e2beb3";
  ctx.beginPath();
  ctx.ellipse(0, 0, 220, 165, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#57211c";
  ctx.beginPath();
  ctx.ellipse(94, 0, 116, 58 + mouthOpen * 72, 0, 0, Math.PI * 2);
  ctx.fill();
  for (let index = 0; index < 34; index += 1) {
    const toothY = -66 + index * 4.1;
    ctx.fillStyle = "#f1ece7";
    ctx.beginPath();
    ctx.moveTo(16, toothY);
    ctx.lineTo(98, toothY + 3);
    ctx.lineTo(22, toothY + 10);
    ctx.closePath();
    ctx.fill();
  }
  for (let index = 0; index < 30; index += 1) {
    const toothY = -58 + index * 4;
    ctx.fillStyle = "#ebe5de";
    ctx.beginPath();
    ctx.moveTo(150, toothY);
    ctx.lineTo(84, toothY + 3);
    ctx.lineTo(142, toothY + 9);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

function drawNpc(npc) {
  const screen = worldToScreen(npc.x, npc.y);
  if (npc.type === "civilian") {
    if (npc.inCar) {
      ctx.fillStyle = npc.carColor || "#6f8fae";
      ctx.fillRect(screen.x - 16, screen.y - 10, 32, 20);
      ctx.fillStyle = "#dbe6ef";
      ctx.fillRect(screen.x - 8, screen.y - 6, 16, 12);
      ctx.fillStyle = "#17181d";
      ctx.fillRect(screen.x - 16, screen.y - 12, 7, 4);
      ctx.fillRect(screen.x + 9, screen.y - 12, 7, 4);
      ctx.fillRect(screen.x - 16, screen.y + 8, 7, 4);
      ctx.fillRect(screen.x + 9, screen.y + 8, 7, 4);
      return;
    }
    ctx.fillStyle = npc.tint;
    ctx.beginPath();
    ctx.arc(screen.x, screen.y, npc.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f5dbc8";
    ctx.beginPath();
    ctx.arc(screen.x, screen.y - npc.radius * 0.9, npc.radius * 0.55, 0, Math.PI * 2);
    ctx.fill();
    if (npc.style === "suit") {
      ctx.fillStyle = "#1a1d22";
      ctx.fillRect(screen.x - 4, screen.y - 1, 8, 11);
      ctx.fillStyle = "#e8edf2";
      ctx.fillRect(screen.x - 1, screen.y - 1, 2, 9);
      ctx.fillStyle = "#aa2a2a";
      ctx.fillRect(screen.x - 1, screen.y + 4, 2, 5);
    }
  } else if (npc.type === "animal") {
    ctx.fillStyle = npc.tint;
    ctx.beginPath();
    ctx.ellipse(screen.x, screen.y, npc.radius, npc.radius * 0.72, 0, 0, Math.PI * 2);
    ctx.fill();
    if (npc.species === "moose" || npc.species === "deer") {
      ctx.strokeStyle = "#6a513e";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(screen.x - 2, screen.y - npc.radius * 0.7);
      ctx.lineTo(screen.x - 6, screen.y - npc.radius - 4);
      ctx.moveTo(screen.x + 2, screen.y - npc.radius * 0.7);
      ctx.lineTo(screen.x + 6, screen.y - npc.radius - 4);
      ctx.stroke();
    } else if (npc.species === "porcupine") {
      ctx.strokeStyle = "#8a7f73";
      ctx.lineWidth = 1.3;
      for (let index = -2; index <= 2; index += 1) {
        ctx.beginPath();
        ctx.moveTo(screen.x + index * 2, screen.y - 1);
        ctx.lineTo(screen.x + index * 3, screen.y - npc.radius - 2);
        ctx.stroke();
      }
    }
  } else if (npc.type === "bird") {
    const flap = Math.sin(state.time * 14 + npc.wingOffset) * 3.5;
    ctx.strokeStyle = "#2f3439";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(screen.x - 6, screen.y);
    ctx.quadraticCurveTo(screen.x - 2, screen.y - flap, screen.x, screen.y);
    ctx.quadraticCurveTo(screen.x + 2, screen.y - flap, screen.x + 6, screen.y);
    ctx.stroke();
  } else if (npc.type === "policeBoss") {
    const faceX = npc.faceX || 1;
    const faceY = npc.faceY || 0;
    const sideX = -faceY;
    const sideY = faceX;
    const bikeLength = 30;
    const bikeWidth = 12;
    const rearX = screen.x - faceX * 10;
    const rearY = screen.y - faceY * 10;
    const frontX = screen.x + faceX * 10;
    const frontY = screen.y + faceY * 10;
    const bodyX = screen.x + faceX * 2;
    const bodyY = screen.y + faceY * 2;

    ctx.strokeStyle = "#0f1014";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(rearX, rearY, 6, 0, Math.PI * 2);
    ctx.arc(frontX, frontY, 6, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#1f2430";
    ctx.beginPath();
    ctx.moveTo(screen.x - faceX * (bikeLength * 0.35) - sideX * (bikeWidth * 0.45), screen.y - faceY * (bikeLength * 0.35) - sideY * (bikeWidth * 0.45));
    ctx.lineTo(screen.x + faceX * (bikeLength * 0.35) - sideX * (bikeWidth * 0.45), screen.y + faceY * (bikeLength * 0.35) - sideY * (bikeWidth * 0.45));
    ctx.lineTo(screen.x + faceX * (bikeLength * 0.35) + sideX * (bikeWidth * 0.45), screen.y + faceY * (bikeLength * 0.35) + sideY * (bikeWidth * 0.45));
    ctx.lineTo(screen.x - faceX * (bikeLength * 0.35) + sideX * (bikeWidth * 0.45), screen.y - faceY * (bikeLength * 0.35) + sideY * (bikeWidth * 0.45));
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#596987";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(rearX, rearY);
    ctx.lineTo(bodyX, bodyY);
    ctx.lineTo(frontX, frontY);
    ctx.stroke();
    ctx.fillStyle = "#27466e";
    ctx.beginPath();
    ctx.arc(bodyX, bodyY, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f0d2c1";
    ctx.beginPath();
    ctx.arc(bodyX + faceX * 2, bodyY - 7, 4.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#10131a";
    ctx.fillRect(bodyX - sideX * 2 - 3, bodyY - sideY * 2 + 1, 6, 10);
    ctx.fillStyle = "#c98f34";
    ctx.fillRect(frontX + faceX * 2 - 3, frontY + faceY * 2 - 2, 6, 4);
    ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
    ctx.fillRect(screen.x - 14, screen.y - 22, 28, 4);
    ctx.fillStyle = "#f0b65e";
    ctx.fillRect(screen.x - 14, screen.y - 22, 28 * clamp(npc.health / npc.maxHealth, 0, 1), 4);
  } else if (npc.type === "police") {
    const faceX = npc.faceX || 1;
    const faceY = npc.faceY || 0;
    const handX = screen.x + faceX * 7;
    const handY = screen.y + faceY * 7;
    const bodyRadius = npc.inVehicle ? 6.5 : npc.radius;
    if (npc.inVehicle) {
      ctx.fillStyle = "#1d3156";
      ctx.fillRect(screen.x - 15, screen.y - 10, 30, 20);
      ctx.fillStyle = "#d3e4f2";
      ctx.fillRect(screen.x - 8, screen.y - 6, 16, 12);
      ctx.fillStyle = "#cb3030";
      ctx.fillRect(screen.x - 4, screen.y - 10, 4, 4);
      ctx.fillStyle = "#3d87d4";
      ctx.fillRect(screen.x, screen.y - 10, 4, 4);
      ctx.fillStyle = "#17181d";
      ctx.fillRect(screen.x - 15, screen.y - 12, 7, 4);
      ctx.fillRect(screen.x + 8, screen.y - 12, 7, 4);
      ctx.fillRect(screen.x - 15, screen.y + 8, 7, 4);
      ctx.fillRect(screen.x + 8, screen.y + 8, 7, 4);
      return;
    }

    ctx.fillStyle = "#223a66";
    ctx.beginPath();
    ctx.arc(screen.x, screen.y, bodyRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f2d4c2";
    ctx.beginPath();
    ctx.arc(screen.x, screen.y - bodyRadius * 0.8, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#a9c2ff";
    ctx.fillRect(screen.x - 4, screen.y - 1, 8, 11);
    ctx.strokeStyle = "#0f1114";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(handX, handY);
    ctx.lineTo(handX + faceX * 7, handY + faceY * 7);
    ctx.stroke();
    ctx.fillStyle = "#0f1114";
    ctx.fillRect(handX + faceX * 5 - 2, handY + faceY * 5 - 2, 5, 4);
  } else if (npc.type === "cia") {
    const faceX = npc.faceX || 1;
    const faceY = npc.faceY || 0;
    const handX = screen.x + faceX * 8;
    const handY = screen.y + faceY * 8;
    if (npc.inVehicle) {
      ctx.fillStyle = "#111214";
      ctx.fillRect(screen.x - 18, screen.y - 10, 36, 20);
      ctx.fillStyle = "#27313c";
      ctx.fillRect(screen.x - 9, screen.y - 6, 18, 12);
      ctx.fillStyle = "#060708";
      ctx.fillRect(screen.x - 18, screen.y - 12, 8, 4);
      ctx.fillRect(screen.x + 10, screen.y - 12, 8, 4);
      ctx.fillRect(screen.x - 18, screen.y + 8, 8, 4);
      ctx.fillRect(screen.x + 10, screen.y + 8, 8, 4);
      return;
    }

    ctx.fillStyle = "#0c0d0f";
    ctx.beginPath();
    ctx.arc(screen.x, screen.y, npc.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#d7c6b7";
    ctx.beginPath();
    ctx.arc(screen.x, screen.y - 6, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#111214";
    ctx.fillRect(screen.x - 4, screen.y - 1, 8, 12);
    ctx.fillStyle = "#f3f4f5";
    ctx.fillRect(screen.x - 1, screen.y - 1, 2, 9);
    ctx.strokeStyle = "#111214";
    ctx.lineWidth = 2.8;
    ctx.beginPath();
    ctx.moveTo(handX, handY);
    ctx.lineTo(handX + faceX * 8, handY + faceY * 8);
    ctx.stroke();
    ctx.fillStyle = "#111214";
    ctx.fillRect(handX + faceX * 6 - 2, handY + faceY * 6 - 2, 6, 4);
  } else if (npc.type === "alien") {
    const faceX = npc.faceX || 1;
    const faceY = npc.faceY || 0;
    const altitude = npc.altitude || 110;
    const shadowY = screen.y + altitude * 0.16;
    const bodyY = screen.y - altitude * 0.34;
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.beginPath();
    ctx.ellipse(screen.x, shadowY, 22, 9, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = npc.variant === "laser" ? "#8a8fff" : npc.variant === "bomb" ? "#8ce7ff" : "#b5ff9d";
    ctx.beginPath();
    ctx.ellipse(screen.x, bodyY, 18, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#4c5564";
    ctx.beginPath();
    ctx.ellipse(screen.x, bodyY - 3, 10, 5, 0, Math.PI, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = npc.variant === "laser" ? "#ff6a6a" : "#eef6ff";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(screen.x + faceX * 4, bodyY + faceY * 3);
    ctx.lineTo(screen.x + faceX * 15, bodyY + faceY * 10);
    ctx.stroke();
    ctx.fillStyle = "#1a1d24";
    ctx.fillRect(screen.x - 4, bodyY + 5, 8, 3);
  } else if (npc.type === "militaryBoss") {
    const faceX = npc.faceX || 1;
    const faceY = npc.faceY || 0;
    const sideX = -faceY;
    const sideY = faceX;
    const altitude = npc.altitude || 0;
    const bodyY = screen.y - altitude * 0.42;
    const shadowY = screen.y + altitude * 0.08;
    ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
    ctx.beginPath();
    ctx.ellipse(screen.x, shadowY + 14, 34, 13, 0, 0, Math.PI * 2);
    ctx.fill();

    for (const arm of npc.arms) {
      const swing = Math.sin(state.time * 2.8 + arm.swingOffset) * 0.45;
      const mountX = screen.x + sideX * arm.mountX + faceX * arm.mountY;
      const mountY = bodyY + sideY * arm.mountX + faceY * arm.mountY;
      const aimAngle = Math.atan2(faceY, faceX) + swing + arm.side * 0.28;
      const tipX = mountX + Math.cos(aimAngle) * arm.length;
      const tipY = mountY + Math.sin(aimAngle) * arm.length;
      ctx.strokeStyle = "#515962";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(mountX, mountY);
      ctx.lineTo(lerp(mountX, tipX, 0.46) + arm.side * 7, lerp(mountY, tipY, 0.46) - 4);
      ctx.lineTo(tipX, tipY);
      ctx.stroke();
      ctx.fillStyle =
        arm.weapon === "flamethrower" ? "#ff8a45" :
        arm.weapon === "minigun" ? "#d8c27f" :
        arm.weapon === "rocket" ? "#9fb06e" :
        "#8d8d8d";
      ctx.fillRect(tipX - 5, tipY - 5, 10, 10);
      if (arm.weapon === "chainsaw") {
        ctx.fillStyle = "#d8d8d8";
        ctx.fillRect(tipX + faceX * 2 - 6, tipY + faceY * 2 - 2, 12, 4);
      }
    }

    ctx.fillStyle = "#59616c";
    ctx.fillRect(screen.x - 24, bodyY - 18, 48, 52);
    ctx.fillStyle = "#737b87";
    ctx.fillRect(screen.x - 18, bodyY - 30, 36, 20);
    ctx.fillStyle = "rgba(190, 210, 220, 0.45)";
    ctx.fillRect(screen.x - 12, bodyY - 25, 24, 14);
    ctx.fillStyle = "#c7b199";
    ctx.beginPath();
    ctx.arc(screen.x, bodyY - 18, 3.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#35424f";
    ctx.fillRect(screen.x - 4, bodyY - 14, 8, 10);
    ctx.fillStyle = "#434b54";
    ctx.fillRect(screen.x - 30, bodyY + 6, 12, 28);
    ctx.fillRect(screen.x + 18, bodyY + 6, 12, 28);
    ctx.fillStyle = "#272c31";
    ctx.fillRect(screen.x - 34, bodyY + 30, 16, 8);
    ctx.fillRect(screen.x + 18, bodyY + 30, 16, 8);
    ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
    ctx.fillRect(screen.x - 18, bodyY - 42, 36, 5);
    ctx.fillStyle = "#ffb16e";
    ctx.fillRect(screen.x - 18, bodyY - 42, 36 * clamp(npc.health / npc.maxHealth, 0, 1), 5);
  } else if (npc.type === "militarySoldier" || npc.type === "militaryGrenadier") {
    const faceX = npc.faceX || 1;
    const faceY = npc.faceY || 0;
    const handX = screen.x + faceX * 7;
    const handY = screen.y + faceY * 7;
    ctx.fillStyle = npc.type === "militaryGrenadier" ? "#54633d" : "#5e6e46";
    ctx.beginPath();
    ctx.arc(screen.x, screen.y, npc.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#cfbea8";
    ctx.beginPath();
    ctx.arc(screen.x, screen.y - 6, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = npc.type === "militaryGrenadier" ? "#7ba050" : "#83975b";
    ctx.fillRect(screen.x - 4, screen.y - 1, 8, 12);
    ctx.strokeStyle = "#221f1a";
    ctx.lineWidth = 2.6;
    ctx.beginPath();
    ctx.moveTo(handX, handY);
    ctx.lineTo(handX + faceX * 8, handY + faceY * 8);
    ctx.stroke();
    ctx.fillStyle = npc.type === "militaryGrenadier" ? "#6e8a2f" : "#1f2224";
    ctx.fillRect(handX + faceX * 6 - 2, handY + faceY * 6 - 2, 6, 4);
  } else if (npc.type === "tank") {
    const faceX = npc.faceX || 1;
    const faceY = npc.faceY || 0;
    ctx.fillStyle = "#4d6550";
    ctx.fillRect(screen.x - 18, screen.y - 12, 36, 24);
    ctx.fillStyle = "#334438";
    ctx.fillRect(screen.x - 10, screen.y - 7, 20, 14);
    ctx.strokeStyle = "#1f2921";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(screen.x + faceX * 4, screen.y + faceY * 4);
    ctx.lineTo(screen.x + faceX * 24, screen.y + faceY * 24);
    ctx.stroke();
    ctx.fillStyle = "#1e2320";
    ctx.fillRect(screen.x - 20, screen.y - 16, 10, 5);
    ctx.fillRect(screen.x + 10, screen.y - 16, 10, 5);
    ctx.fillRect(screen.x - 20, screen.y + 11, 10, 5);
    ctx.fillRect(screen.x + 10, screen.y + 11, 10, 5);
  } else if (npc.type === "helicopter") {
    const faceX = npc.faceX || 1;
    const faceY = npc.faceY || 0;
    const altitude = npc.altitude || 70;
    const shadowY = screen.y + altitude * 0.18;
    const bodyY = screen.y - altitude * 0.4;
    ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
    ctx.beginPath();
    ctx.ellipse(screen.x, shadowY, 18, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#2b3037";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(screen.x - 22, bodyY);
    ctx.lineTo(screen.x + 22, bodyY);
    ctx.stroke();
    ctx.fillStyle = "#55616c";
    ctx.beginPath();
    ctx.ellipse(screen.x, bodyY, 16, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#7c8994";
    ctx.fillRect(screen.x - 8, bodyY - 4, 16, 8);
    ctx.strokeStyle = "#1d2329";
    ctx.lineWidth = 2.6;
    ctx.beginPath();
    ctx.moveTo(screen.x + faceX * 8, bodyY + faceY * 8);
    ctx.lineTo(screen.x + faceX * 20, bodyY + faceY * 20);
    ctx.stroke();
    ctx.fillStyle = "#1d2329";
    ctx.fillRect(screen.x + faceX * 16 - 3, bodyY + faceY * 16 - 2, 7, 4);
    ctx.strokeStyle = "#2d3137";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(screen.x - 22, bodyY + 1);
    ctx.lineTo(screen.x + 22, bodyY + 1);
    ctx.stroke();
  }
}

function drawPlayer() {
  const core = worldToScreen(state.player.x, state.player.y);
  const nodeRadius = getNodeRadius();
  const auraRadius = state.player.radius + 28 + Math.sqrt(state.player.followers.length) * 4.6;
  const aura = ctx.createRadialGradient(core.x, core.y, 12, core.x, core.y, auraRadius);
  aura.addColorStop(0, "rgba(130, 8, 8, 0.22)");
  aura.addColorStop(0.55, "rgba(170, 16, 16, 0.08)");
  aura.addColorStop(1, "rgba(170, 16, 16, 0)");
  ctx.fillStyle = aura;
  ctx.beginPath();
  ctx.arc(core.x, core.y, auraRadius, 0, Math.PI * 2);
  ctx.fill();

  if (state.pointer.active) {
    const magnet = ctx.createRadialGradient(state.pointer.x, state.pointer.y, 4, state.pointer.x, state.pointer.y, 48);
    magnet.addColorStop(0, "rgba(69, 156, 255, 0.26)");
    magnet.addColorStop(0.7, "rgba(69, 156, 255, 0.1)");
    magnet.addColorStop(1, "rgba(69, 156, 255, 0)");
    ctx.fillStyle = magnet;
    ctx.beginPath();
    ctx.arc(state.pointer.x, state.pointer.y, 48, 0, Math.PI * 2);
    ctx.fill();
  }

  for (const follower of state.player.followers) {
    const screen = worldToScreen(follower.x, follower.y);
    ctx.strokeStyle = `rgba(156, 12, 12, ${CONFIG.bodyLinkAlpha})`;
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.moveTo(core.x, core.y);
    ctx.lineTo(screen.x, screen.y);
    ctx.stroke();
  }

  for (const follower of state.player.followers) {
    const screen = worldToScreen(follower.x, follower.y);
    const gradient = ctx.createRadialGradient(screen.x - 1.5, screen.y - 1.5, 0, screen.x, screen.y, follower.radius * 2);
    gradient.addColorStop(0, "rgba(255, 170, 170, 0.98)");
    gradient.addColorStop(0.5, "rgba(223, 26, 26, 0.98)");
    gradient.addColorStop(1, "rgba(95, 8, 8, 0.96)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(screen.x, screen.y, follower.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  const coreGradient = ctx.createRadialGradient(core.x - nodeRadius * 0.35, core.y - nodeRadius * 0.35, 0, core.x, core.y, nodeRadius * 2.2);
  coreGradient.addColorStop(0, "rgba(255, 214, 214, 1)");
  coreGradient.addColorStop(0.4, "rgba(255, 74, 74, 0.99)");
  coreGradient.addColorStop(1, "rgba(118, 6, 6, 0.99)");
  ctx.fillStyle = coreGradient;
  ctx.beginPath();
  ctx.arc(core.x, core.y, nodeRadius, 0, Math.PI * 2);
  ctx.fill();
}

function drawTracers() {
  for (const tracer of state.world.tracers) {
    const a = worldToScreen(tracer.x1, tracer.y1);
    const b = worldToScreen(tracer.x2, tracer.y2);
    const lifeBase = tracer.maxLife || CONFIG.tracerLifetime;
    const alpha = clamp(tracer.life / lifeBase, 0, 1);
    const baseColor = tracer.color || "rgba(255, 214, 92, 1)";
    ctx.strokeStyle = baseColor.replace(/, 1\)$/, `, ${alpha.toFixed(3)})`);
    ctx.lineWidth = tracer.width || 2.4;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  }
}

function drawProjectiles() {
  for (const projectile of state.world.projectiles) {
    const screen = worldToScreen(projectile.x, projectile.y);
    const drawY = projectile.kind === "ciaBomb" ? screen.y - 40 : projectile.kind === "alienBomb" ? screen.y - 22 : screen.y;
    ctx.fillStyle = projectile.color;
    ctx.beginPath();
    ctx.arc(screen.x, drawY, projectile.radius, 0, Math.PI * 2);
    ctx.fill();
    if (projectile.kind === "ciaBomb") {
      ctx.strokeStyle = "rgba(245, 245, 245, 0.55)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(screen.x, drawY + projectile.radius);
      ctx.lineTo(screen.x, screen.y + 8);
      ctx.stroke();
    } else if (projectile.kind === "alienBomb") {
      ctx.strokeStyle = "rgba(210, 246, 255, 0.45)";
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(screen.x, drawY + projectile.radius);
      ctx.lineTo(screen.x, screen.y + 2);
      ctx.stroke();
    }
  }
}

function drawTraps() {
  for (const trap of state.world.traps) {
    const screen = worldToScreen(trap.x, trap.y);
    if (trap.kind === "gas") {
      const gradient = ctx.createRadialGradient(screen.x, screen.y, 8, screen.x, screen.y, trap.radius);
      gradient.addColorStop(0, "rgba(188, 28, 28, 0.22)");
      gradient.addColorStop(0.55, "rgba(175, 18, 18, 0.14)");
      gradient.addColorStop(1, "rgba(175, 18, 18, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(screen.x, screen.y, trap.radius, 0, Math.PI * 2);
      ctx.fill();
    } else if (trap.kind === "tripwire") {
      const end = worldToScreen(trap.x2, trap.y2);
      ctx.strokeStyle = trap.triggered ? "rgba(255, 145, 88, 0.88)" : "rgba(255, 82, 82, 0.72)";
      ctx.lineWidth = trap.triggered ? 4 : 2;
      ctx.beginPath();
      ctx.moveTo(screen.x, screen.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
      ctx.fillStyle = "#1d1f26";
      ctx.beginPath();
      ctx.arc(screen.x, screen.y, 4, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = trap.kind === "teleportMine" ? "#7f6bff" : "#5f6168";
      ctx.beginPath();
      ctx.arc(screen.x, screen.y, trap.radius + 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = trap.kind === "teleportMine" ? "#cfc3ff" : "#d78552";
      ctx.beginPath();
      ctx.arc(screen.x, screen.y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function drawExplosions() {
  for (const explosion of state.world.explosions) {
    const screen = worldToScreen(explosion.x, explosion.y);
    const alpha = clamp(explosion.life / explosion.maxLife, 0, 1);
    const radius = explosion.radius * (1.2 - alpha * 0.35);
    const gradient = ctx.createRadialGradient(screen.x, screen.y, 0, screen.x, screen.y, radius);
    gradient.addColorStop(0, `rgba(255, 235, 180, ${(alpha * 0.7).toFixed(3)})`);
    gradient.addColorStop(0.4, `rgba(255, 156, 76, ${(alpha * 0.55).toFixed(3)})`);
    gradient.addColorStop(1, `rgba(170, 32, 24, 0)`);
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(screen.x, screen.y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawOverlay() {
  const dayNight = getDayNightState();
  const celestialX = state.width * (0.15 + dayNight.cycle * 0.7);
  const celestialY = state.height * (0.18 + Math.sin(dayNight.cycle * Math.PI * 2) * 0.1);
  ctx.fillStyle = dayNight.darkness > 0.5 ? "rgba(236, 240, 255, 0.8)" : "rgba(255, 244, 188, 0.75)";
  ctx.beginPath();
  ctx.arc(celestialX, celestialY, dayNight.darkness > 0.5 ? 12 : 16, 0, Math.PI * 2);
  ctx.fill();

  if (dayNight.darkness > 0.1) {
    ctx.fillStyle = `rgba(18, 28, 54, ${(dayNight.darkness * 0.38).toFixed(3)})`;
    ctx.fillRect(0, 0, state.width, state.height);
  }

  if (state.world.alert > 0) {
    ctx.fillStyle = `rgba(170, 16, 16, ${(state.world.alert / 100 * 0.12).toFixed(3)})`;
    ctx.fillRect(0, 0, state.width, state.height);
  }

  if (state.world.ciaWorm?.quake > 0.08) {
    ctx.fillStyle = `rgba(132, 88, 64, ${(state.world.ciaWorm.quake * 0.06).toFixed(3)})`;
    ctx.fillRect(0, 0, state.width, state.height);
  }

  const growthTint = clamp((state.player.absorbedHumans - 2) / 72, 0, 1);
  if (growthTint > 0) {
    ctx.fillStyle = `rgba(126, 8, 8, ${(0.02 + growthTint * 0.11).toFixed(3)})`;
    ctx.fillRect(0, 0, state.width, state.height);
  }

  if (state.gameOver) {
    ctx.fillStyle = "rgba(10, 8, 8, 0.55)";
    ctx.fillRect(0, 0, state.width, state.height);
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 32px Segoe UI";
    ctx.textAlign = "center";
    ctx.fillText("The Swarm Was Put Down", state.width * 0.5, state.height * 0.5 - 12);
    ctx.font = "18px Segoe UI";
    ctx.fillText(`Press ${state.gameMode === "sandbox" ? "Reset Arena" : "Reset Town"} to try again.`, state.width * 0.5, state.height * 0.5 + 22);
  }

  if (state.world.ciaWorm?.cutscene) {
    ctx.fillStyle = "rgba(16, 10, 12, 0.48)";
    ctx.fillRect(0, 0, state.width, state.height);
    ctx.fillStyle = "#f2ebe3";
    ctx.font = "700 28px Segoe UI";
    ctx.textAlign = "center";
    ctx.fillText("CIA Summoning Ritual", state.width * 0.5, state.height * 0.18);
    ctx.font = "18px Segoe UI";
    ctx.fillText("A portal tears open and something enormous answers.", state.width * 0.5, state.height * 0.18 + 34);
  }

  if (state.gameMode === "sandbox" && state.gameStarted && state.sandbox.placement && state.pointer.active) {
    const color = state.sandbox.category === "structures" ? "rgba(170, 16, 16, 0.32)" : "rgba(42, 98, 182, 0.28)";
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(state.pointer.x, state.pointer.y, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = color.replace("0.32", "0.78").replace("0.28", "0.72");
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(state.pointer.x, state.pointer.y, 26, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function render() {
  drawTown();
  drawDebris();
  drawBlood();
  drawCIAWormHoles();
  drawCIAWormDust();
  drawTraps();
  drawExplosions();
  drawProjectiles();
  for (const npc of state.world.npcs) {
    drawNpc(npc);
  }
  drawCIAWorm();
  drawPlayer();
  drawTracers();
  drawOverlay();
}

function startGame(mode = "town") {
  state.gameMode = mode;
  state.gameStarted = true;
  menuScreen.classList.add("hidden");
  state.sandbox.category = "structures";
  state.sandbox.placement = null;
  if (mode === "sandbox") {
    state.sandbox.menuOpen = true;
  } else {
    state.sandbox.menuOpen = false;
    state.sandbox.placement = null;
  }
  ensureAudio();
  resetGame();
}

function returnToMenu() {
  state.gameStarted = false;
  state.gameMode = "town";
  state.sandbox.menuOpen = false;
  state.sandbox.placement = null;
  closeSandboxMenu();
  menuScreen.classList.remove("hidden");
  resetGame();
  updateHud();
}

// SECTION: loop and events
function loop(timestamp) {
  if (!state.lastTime) {
    state.lastTime = timestamp;
  }

  const deltaTime = Math.min((timestamp - state.lastTime) / 1000, 1 / 20);
  state.lastTime = timestamp;
  state.time += deltaTime;

  updateGame(deltaTime);
  render();
  updateHud();
  state.animationId = window.requestAnimationFrame(loop);
}

function updatePointerFromEvent(event) {
  const rect = canvas.getBoundingClientRect();
  state.pointer.x = clamp(event.clientX - rect.left, 0, state.width);
  state.pointer.y = clamp(event.clientY - rect.top, 0, state.height);
  state.pointer.active = true;
}

function resizeCanvas() {
  const ratio = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
  state.width = window.innerWidth;
  state.height = window.innerHeight;
  canvas.width = state.width * ratio;
  canvas.height = state.height * ratio;
  canvas.style.width = `${state.width}px`;
  canvas.style.height = `${state.height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  state.pointer.x = clamp(state.pointer.x, 0, state.width);
  state.pointer.y = clamp(state.pointer.y, 0, state.height);
  ensureChunksAroundPlayer();
}

canvas.addEventListener("pointermove", updatePointerFromEvent);
canvas.addEventListener("pointerdown", (event) => {
  if (!state.gameStarted) {
    return;
  }
  ensureAudio();
  updatePointerFromEvent(event);
  if (state.gameMode === "sandbox" && state.sandbox.placement) {
    const worldPoint = screenToWorld(state.pointer.x, state.pointer.y);
    if (state.sandbox.category === "structures") {
      placeSandboxStructure(state.sandbox.placement, worldPoint.x, worldPoint.y);
    } else {
      spawnSandboxEnemy(state.sandbox.placement, worldPoint.x, worldPoint.y);
    }
  }
});
canvas.addEventListener("pointerenter", updatePointerFromEvent);
canvas.addEventListener("pointerleave", () => {
  state.pointer.active = false;
});

window.addEventListener("keydown", (event) => {
  if (!state.gameStarted) {
    if (event.key === "Enter" || event.key === " ") {
      startGame();
    }
    return;
  }
  ensureAudio();
  if (state.gameMode === "sandbox" && event.key.toLowerCase() === "f") {
    if (state.sandbox.menuOpen) {
      closeSandboxMenu();
    } else {
      openSandboxMenu();
    }
    return;
  }
  if (event.key.toLowerCase() === "r") {
    resetGame();
  }
});

playButton.addEventListener("click", () => {
  startGame();
});

sandboxButton.addEventListener("click", () => {
  startGame("sandbox");
});

sandboxCloseButton.addEventListener("click", () => {
  closeSandboxMenu();
});

sandboxStructuresTab.addEventListener("click", () => {
  state.sandbox.category = "structures";
  updateSandboxUi();
});

sandboxEnemiesTab.addEventListener("click", () => {
  state.sandbox.category = "enemies";
  updateSandboxUi();
});

sandboxSizeDownSmall.addEventListener("click", () => adjustSandboxPlayerSize(-5));
sandboxSizeDownLarge.addEventListener("click", () => adjustSandboxPlayerSize(-20));
sandboxSizeUpSmall.addEventListener("click", () => adjustSandboxPlayerSize(5));
sandboxSizeUpLarge.addEventListener("click", () => adjustSandboxPlayerSize(20));

resetButton.addEventListener("click", () => {
  ensureAudio();
  resetGame();
});

menuButton.addEventListener("click", () => {
  returnToMenu();
});

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
resetGame();
updateHud();
state.animationId = window.requestAnimationFrame(loop);
