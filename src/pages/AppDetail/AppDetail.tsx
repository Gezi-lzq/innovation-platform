import React from 'react'
import { Button, Tooltip } from '@mui/material'
import QrCodeIcon from '@mui/icons-material/QrCode';
import { useParams } from 'react-router-dom'
import { apps } from '../../configs/apps'
import { Category } from '../../configs/apps'
import styles from './AppDetail.module.css'
import { QRCodeCanvas } from 'qrcode.react'

interface Props { }

const AppDetail = (props: Props) => {
  const { id, category } = useParams()
  const data = apps[category as Category][id ? Number(id) : 0]

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.image_wrapper}>
          <img className={styles.background_blur} alt='background' src={`/assets/app/logos/${data.picture}`} />
          <div className={styles.image_cover}></div>
          <img className={styles.app_logo} alt='app-logo' src={`/assets/app/logos/${data.picture}`} />
        </div>
        <div className={styles.content_info}>
          <h1>{data.title}</h1>
          <p>{data.note}</p>
          <p>分类：{data.category}</p>
          <div className={styles.button_group}>
            <Button variant='contained' disableElevation
              onClick={() => {
                window.open(data.url, '_blanked')
              }}
              sx={{
                mr: '1rem',
                color: '#393e46',
                backgroundColor: '#e5e5ea',
                transition: 'all 200ms',
                ":hover": {
                  color: 'white',
                  backgroundColor: 'black'
                }
              }}>访问</Button>
            <Tooltip arrow title={
              <QRCodeCanvas value={data.url} />
            }>
              <Button variant='contained' disableElevation>手机扫码<QrCodeIcon fontSize='small' /></Button>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className={styles.secondary_content}>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default AppDetail