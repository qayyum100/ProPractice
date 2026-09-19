import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Modal } from '../components/ui/Modal'
import { Badge } from '../components/ui/Badge'
import {
  Users,
  Clock,
  Plus,
  ArrowRight,
  Zap,
  Globe
} from 'lucide-react'

interface RoomListing {
  id: string
  code: string
  title: string
  hostName: string
  duration: number
  participantsCount: number
  maxParticipants: number
  status: 'waiting' | 'in_progress'
}

const SAMPLE_ROOMS: RoomListing[] = [
  {
    id: 'room_1',
    code: 'SPEED9',
    title: '60-Second Developer Sprint',
    hostName: 'DevLead_Alex',
    duration: 60,
    participantsCount: 3,
    maxParticipants: 8,
    status: 'waiting'
  },
  {
    id: 'room_2',
    code: 'LEXICON',
    title: 'Advanced English Vocabulary Race',
    hostName: 'Sarah_Writer',
    duration: 90,
    participantsCount: 2,
    maxParticipants: 6,
    status: 'waiting'
  },
  {
    id: 'room_3',
    code: 'PUNCT',
    title: 'Punctuation Precision Master',
    hostName: 'Elena_K',
    duration: 45,
    participantsCount: 4,
    maxParticipants: 8,
    status: 'waiting'
  }
]

export const ChallengesPage: React.FC = () => {
  const navigate = useNavigate()
  const [roomCodeInput, setRoomCodeInput] = useState<string>('')
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false)
  const [newRoomTitle, setNewRoomTitle] = useState<string>('')
  const [newRoomDuration, setNewRoomDuration] = useState<number>(60)

  const handleJoinByCode = (e: React.FormEvent) => {
    e.preventDefault()
    if (!roomCodeInput.trim()) return
    navigate(`/rooms/${roomCodeInput.trim().toUpperCase()}`)
  }

  const handleCreateRoom = () => {
    const generatedCode = 'ROOM' + Math.floor(10 + Math.random() * 90)
    setIsCreateModalOpen(false)
    navigate(`/rooms/${generatedCode}`, {
      state: {
        title: newRoomTitle || 'Custom Challenge Room',
        duration: newRoomDuration,
        isHost: true
      }
    })
  }

  return (
    <div className="py-8 sm:py-12 space-y-10">
      <Container size="lg" className="space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Multiplayer & Real-Time Arenas
            </span>
            <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-0.5">
              Challenge Hub
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Compete against friends or global practitioners in synchronized real-time typing races.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="md"
              variant="primary"
              onClick={() => setIsCreateModalOpen(true)}
              icon={<Plus className="w-4 h-4" />}
            >
              Create Room
            </Button>
          </div>
        </div>

        {/* 1. Join Room Via Code Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              Have a Private Room Code?
            </h3>
            <p className="text-xs text-neutral-500">
              Enter your 6-character room code to enter the live waiting lobby.
            </p>
          </div>

          <form onSubmit={handleJoinByCode} className="flex items-center gap-2 w-full md:w-auto">
            <Input
              value={roomCodeInput}
              onChange={(e) => setRoomCodeInput(e.target.value)}
              placeholder="e.g. SPEED9"
              className="font-mono uppercase tracking-widest text-center"
            />
            <Button type="submit" variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>
              Join
            </Button>
          </form>
        </div>

        {/* 2. Active Public Challenge Lobbies */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-sky-500" />
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Live Public Lobbies
              </h3>
            </div>
            <span className="text-xs font-semibold text-neutral-400">
              {SAMPLE_ROOMS.length} active rooms waiting
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_ROOMS.map((room) => (
              <div
                key={room.id}
                className="p-6 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm flex flex-col justify-between space-y-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded-md border border-sky-200 dark:border-sky-800">
                      #{room.code}
                    </span>
                    <Badge variant="success">Waiting</Badge>
                  </div>

                  <h4 className="text-base font-bold text-neutral-900 dark:text-white">
                    {room.title}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    Hosted by {room.hostName}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-neutral-400 mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{room.duration}s</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>{room.participantsCount}/{room.maxParticipants}</span>
                    </div>
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => navigate(`/rooms/${room.code}`)}
                  icon={<Zap className="w-3.5 h-3.5" />}
                >
                  Join Room
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Create Room Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create Challenge Room"
        description="Set up a multiplayer arena for your team or community."
      >
        <div className="space-y-4 pt-2">
          <Input
            label="Room Title"
            value={newRoomTitle}
            onChange={(e) => setNewRoomTitle(e.target.value)}
            placeholder="e.g. Frontend Team Velocity Sprint"
          />

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
              Race Duration
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[30, 60, 90, 120].map((sec) => (
                <button
                  key={sec}
                  type="button"
                  onClick={() => setNewRoomDuration(sec)}
                  className={`py-2 text-xs font-mono font-semibold rounded-xl border transition-all ${
                    newRoomDuration === sec
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border-neutral-900 dark:border-white'
                      : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {sec}s
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <Button variant="ghost" onClick={() => setIsCreateModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleCreateRoom}>
              Launch Room
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
